import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, region: string): string {
    if (region === 'eu') {
      return value.toString().replace('.', ',');
    } else if (region === 'us') {
      return value.toString().replace(',', '.');
    }
    return value.toString();
  }
}
