import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators'
import * as decodeFirebasePushID from '@jengjeng/firebase-pushid-convert-timestamp';
import * as Chance from 'chance';
import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  listRef: AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.listRef = db.list<any>('data-readings');
  }

  createObject(path: string, object: any) {
    this.db.list<any>(path).push(object);
  }

  goOnline() {
    return this.db.database.goOnline();
  }

  goOffline() {
    return this.db.database.goOffline();
  }

  getPatientReadings(patientNo: string) {
    return this.listRef.snapshotChanges().pipe(
      map((values) => {
        const readings = values.map((value) => {
          let object = {};
          const data = value.payload.toJSON();
          let reading = data.toString().split(' ');
          reading.map((val) => {
            object[val.split('/')[0]] = val.split('/')[1]
          });
          return { id: value.key, ...object };
        })
          .filter((e: any) => e.patientNo === patientNo)
          .map((e: any) => {
            const tsl = decodeFirebasePushID(e.id);
            const unix = tsl.timestamp.toString().split('').splice(0, 10).join('');
            // e.timestamm = new Date(unix*1000);
            e.timestamm = moment.unix(unix).fromNow();
            return e;
          });

        return <any[]>_.sortBy(readings, [(message) => message.timestamp]).reverse();
      })
    )
  }

  write() {
    const data = [
      "sbpVal/27.77 dbpVal/-29.24 hrVal/-24.31 timestamp/1530763564 patientNo/PX-963309195986",
      "sbpVal/-25.89 dbpVal/-4.53 hrVal/0.48 timestamp/1530763564 patientNo/PX-743002104549",
      "sbpVal/10.08 dbpVal/24.39 hrVal/9.27 timestamp/1530763564 patientNo/PX-318419614038",
      "sbpVal/9.15 dbpVal/8.53 hrVal/27.81 timestamp/1530763564 patientNo/PX-685932403453",
      "sbpVal/-0.43 dbpVal/9.57 hrVal/-11.52 timestamp/1530763564 patientNo/PX-925742140063"
    ];

    data.forEach((e) => {
      this.db.list<any>('data').push(e);
    })
  }

  readings() {
    let i = 0;
    if (i !== 0) return;
    i++;
    // this.db.list<any>('data').snapshotChanges().pipe(
    return this.listRef.snapshotChanges().pipe(
      map((values) => {
        return values.map((value) => {
          const object = {};
          let data = value.payload.val().toString();
          data.split(' ').map((str: string) => {
            const key = str.split('/')[0];
            const val = str.split('/')[1];
            return { key, val }
          }).forEach((doc: any) => (object[doc.key] = doc.val));

          const newData = `sbpVal/${this.random.sbp} dbpVal/${this.random.dbp} hrVal/${this.random.hr} timestamp/${object['timestamp']} patientNo/${object['patientNo']}`;

          value.payload.ref.set(newData)
        })
      })
    ).subscribe(() => 0);
  }

  get random() {
    const chance = new Chance();
    return {
      sbp: chance.floating({ min: 100, max: 147, fixed: 4 }),
      dbp: chance.floating({ min: 66, max: 90, fixed: 2 }),
      hr: chance.floating({ min: 67, max: 117,fixed: 2 })
    }
  }



}
