import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfCase'
})
export class CpfCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value.length === 11){
      let c1 = value.slice(0,3);
      let c2 = value.slice(3,6);
      let c3 = value.slice(6,9);
      let digito = value.slice(9,11);

      return c1+"."+c2+"."+c3+"-"+digito;
    }
    return null;
  }

}
