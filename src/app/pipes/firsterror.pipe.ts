import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firsterror'
})
export class FirsterrorPipe implements PipeTransform {

  transform(obj): any {
    var keys = Object.keys(obj);
    if (keys && keys.length>0) {
      return keys[0];
    }
    return null;
  }

}
