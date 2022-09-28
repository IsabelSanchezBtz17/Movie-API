import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return  value.toUpperCase();
  }

}
