import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map, switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
import * as moment from 'moment';
import * as _ from 'lodash';

import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private userPatients: AngularFirestoreCollection<any>;
  private userDoctors: AngularFirestoreCollection<any>;
  private userAdmins: AngularFirestoreCollection<any>;

  private dataReadings: AngularFirestoreCollection<any>;
  private dataPatients: AngularFirestoreCollection<any>;
  private dataDoctors: AngularFirestoreCollection<any>;
  private dataTimings: AngularFirestoreCollection<any>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private database: DatabaseService
  ) {
    this.userPatients = firestore.collection('user-patients');
    this.userDoctors = firestore.collection('user-doctors');
    this.userAdmins = firestore.collection('user-admins');

    this.dataReadings = firestore.collection('data-readings');
    this.dataPatients = firestore.collection('data-patients');
    this.dataDoctors = firestore.collection('data-doctors');
    this.dataTimings = firestore.collection('data-timings');
  }

  pushToReadings(reading: string) {
    this.dataReadings.add({ reading: reading })
      .then(() => {
        this.database.createObject('data-readings', reading);
      });
  }

  enableNetwork() {
    return this.firestore.firestore.enableNetwork();
  }

  disableNetwork() {
    return this.firestore.firestore.disableNetwork();
  }

  createUser(user: any, option: string) {
    return this.authService.createUserWithEmailAndPassword(user.email, user.password)
      .then((state: any) => {
        this.enableNetwork();

        switch(option) {
          case 'patient': this.createPatient(state.user.uid, user);   break;
          case 'doctor':  this.createDoctor(state.user.uid, user);    break;
          case 'admin':   this.createAdmin(user);                     break;
          default: break;
        }

        return user.fullname;
      });
  }

  getPatientDetails(isList: boolean = false) {
    return this.readCollection(this.userPatients, isList);
  }

  getDoctorDetails(isList: boolean = false) {
    return this.readCollection(this.userDoctors, isList);
  }

  getOnlinePatient() {
    const patients = this.userPatients.valueChanges();

    return this.authService.getCurrentUid().pipe(
      switchMap((uid) => {
        return patients.pipe(
          map((values: any[]) => {
            return values.filter(e => e.uid === uid)[0]
          })
        )
      })
    );
  }

  getOnlineDoctor() {
    const patients = this.userDoctors.valueChanges();

    return this.authService.getCurrentUid().pipe(
      switchMap((uid) => {
        return patients.pipe(
          map((values: any[]) => {
            return values.filter(e => e.uid === uid)[0]
          })
        )
      })
    );
  }

  getPatientDoctors(fullname: string) {
    return this.userPatients.snapshotChanges().pipe(
      map((values) => {
        let doc = [];
        values.map((value) => {
          value.payload.doc.ref.collection('doctors').onSnapshot(
            (data) => {
              fullname === value.payload.doc.data().fullname
                ? data.docChanges().forEach((data) => {
                    const _data = data.doc.data();
                    doc.filter((v) => {
                      return v.fullname === _data.fullname
                    }).length === 0 ? doc.push(_data) : 0;
                  }) : 0;
            }
          )
        });
        return doc;
      })
    );
  }

  getDoctorPatients(fullname?: string) {
    return this.userDoctors.snapshotChanges().pipe(
      map((values) => {
        let doc = [];
        values.map((value) => {
          value.payload.doc.ref.collection('patients').onSnapshot(
            (data) => {
              fullname === value.payload.doc.data().fullname
                ? data.docChanges().forEach((data) => {
                    const _data = data.doc.data();
                    doc.filter((v) => {
                      return v.fullname === _data.fullname
                    }).length === 0 ? doc.push(_data) : 0;
                  }) : 0;
            }
          )
        });
        return doc;
      })
    );
  }

  addPatientToDoctor(form: any) {
    const doctor = form.doctor;
    const patient = form.patient;

    this.userDoctors.snapshotChanges().pipe(
      map((values) => {
        return values.map((value) => {
          const data = value.payload.doc.data();

          data.doctorNo === doctor.doctorNo
            ? value.payload.doc.ref.collection('patients').add({ ...patient }) : 0;

          return data;
        })
      })
    ).subscribe((response) => { });
  }

  addDoctorToPatient(form: any) {
    const doctor = form.doctor;
    const patient = form.patient;

    this.userPatients.snapshotChanges().pipe(
      map((values) => {
        return values.map((value) => {
          const data = value.payload.doc.data();

          data.patientNo === patient.patientNo
            ? value.payload.doc.ref.collection('doctors').add({ ...doctor }) : 0;

          return data;
        })
      })
    ).subscribe((response) => { });
  }

  sendMessageToDoctor(to: string, from: string, message: string) {
    const _message = { to, from, message };
    const timestamp = moment().format('X');

    this.dataPatients.add({ ..._message, timestamp })
      .then(() => {
        this.database.createObject('data-patients', { ..._message, timestamp });
      });
  }

  sendRemarkToPatient(to: string, from: string, message: string) {
    const _message = { to, from, message };
    const timestamp = moment().format('X');

    this.dataDoctors.add({ ..._message, timestamp })
      .then(() => {
        this.database.createObject('data-doctor', { ..._message, timestamp });
      });
  }

  getDoctorsRemarks(fullname: string) {
    return this.dataDoctors.valueChanges().pipe(
      map((values: any[]) => {
        return values.filter(e => e.to === fullname);
      })
    );
  }

  getPatientMessages(fullname: string) {
    return this.dataPatients.valueChanges().pipe(
      map((values: any[]) => {
        return values.filter(e => e.to === fullname);
      })
    );
  }

  getPatientReadings(patientNo: string) {
    return this.dataReadings.snapshotChanges().pipe(
      map((values) => {
        const readings = values.map((value) => {

          const index = value.payload.newIndex;
          const data = value.payload.doc.data();

          return { index, ...data };
        }).map((response) => {
          let object = {};
          const index = response.index;
          let reading = response.reading.split(' ');
          reading.map((val) => {
            object[val.split('/')[0]] = val.split('/')[1]
          });
          return { index, ...object };
        }).filter((e: any) => e.patientNo === patientNo);

        return <any[]>_.sortBy(readings, [(message) => message.timestamp]).reverse();
      })
    );
  }

  setTime(setTime: any) {
    setTime['current'] = 0;
    setTime['timing'] = false;
    setTime['timestamp'] = moment().format('X');;

    this.dataTimings.add({ ...setTime })
      .then(() => {
        this.database.createObject('data-timings', { ...setTime });
      })
  }

  // helper functions

  private createPatient(uid: string, user: any) {
    const userDetails = { ...user, uid };
    this.userPatients.add(userDetails)
      .then(() => (this.database.createObject('user-patients', userDetails)));
  }

  private createDoctor(uid: string, user: any) {
    const userDetails = { ...user, uid };
    this.userDoctors.add(userDetails)
      .then(() => (this.database.createObject('user-doctors', userDetails)));
  }

  private createAdmin(user: any) {
    this.userAdmins.add(user)
      .then(() => (this.database.createObject('user-admins', user)));
  }

  private readCollection(collection: AngularFirestoreCollection, isList: boolean) {
    return collection.snapshotChanges().pipe(
      map((values) => {

        const isFalse = values.map((value) => {
          const data = value.payload.doc.data();
          delete data['email'];
          delete data['password'];
          return { ...data };
        });

        const isTrue = values.map((value) => {
          const data = value.payload.doc.data();
          const pushId = value.payload.doc.id;;
          return { ...data, pushId };
        });

        return isList ? isTrue : isFalse;
      })
    );
  }

}
