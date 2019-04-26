import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(unix: number, args?: any): any {
    const newDate = new Date(unix*1000);
    const timestamp = moment(newDate).fromNow();

    return timestamp;
  }

}
