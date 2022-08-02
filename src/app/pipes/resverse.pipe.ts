import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resverse'
})
export class ResversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
