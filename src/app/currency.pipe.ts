import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value !== null && !isNaN(value)) {
      return value * 2;
    } else {
      return 'Not a number';
    }
  }
}
