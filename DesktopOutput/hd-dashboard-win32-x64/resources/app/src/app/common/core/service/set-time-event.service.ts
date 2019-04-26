import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from 'angularfire2/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SetTimeEventService {

  dataTimings: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.dataTimings = firestore.collection('data-timings');
  }

  setTimeEventHandler() {

    this.dataTimings.snapshotChanges().pipe(
      map((values: DocumentChangeAction<any>[]) => {
        return values.map((value: DocumentChangeAction<any>) => {

          const duration = value.payload.doc.data()['duration'];
          const between = value.payload.doc.data()['between'];
          const current = value.payload.doc.data()['current'];

          setTimeout(() => {

            // value.payload.doc.ref.update({ timing: true });

          }, duration);

          return value.payload.doc.data();

        })
      })
    ).subscribe((response) => {

      // console.log(response);

    });

  }

}
