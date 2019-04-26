import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators'

import { FirestoreService } from '../../core/service/firestore.service';

@Pipe({
  name: 'email'
})
export class GetEmailPipe implements PipeTransform {

  constructor(private firestoreService: FirestoreService) {}

  transform(value: any, args?: any): any {
    return this.firestoreService.getPatientDetails().pipe(
      map((patients: any[]) => {
        return patients.filter(e => e.fullname === value.fullname)[0].email
      })
    );
  }

}
