import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators'
import * as decodeFirebasePushID from '@jengjeng/firebase-pushid-convert-timestamp';
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

}
