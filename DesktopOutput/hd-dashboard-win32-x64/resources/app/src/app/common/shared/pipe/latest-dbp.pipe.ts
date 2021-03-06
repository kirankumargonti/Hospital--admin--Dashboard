import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators'

import { FirestoreService } from '../../core/service/firestore.service';
import { DatabaseService } from '../../core/service/database.service';

@Pipe({
  name: 'latestDbp'
})
export class LatestDbpPipe implements PipeTransform {

  constructor(
    private firestoreService: FirestoreService,
    private databaseService: DatabaseService
  ) {}

  transform(value: any, args?: any): any {
    // return this.firestoreService.getPatientReadings(value.patientNo).pipe(
    //   map((readings: any[]) => {
    //     return readings.map((reading) => reading.dbpVal)[0];
    //   })
    // );
    return this.databaseService.getPatientReadings(value.patientNo).pipe(
      map((readings: any[]) => {
        return readings.map((reading) => reading.dbpVal)[0];
      })
    );
  }

}
