import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'capitalize'}) // The name I will have to use in my html
export class CapitalizePipes implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.charAt(0).toLocaleUpperCase() + value.slice(1); // Here I created my own pipe called capitalize which
      // sets the first character to uppercase letter
    }
    return value;
  }
}
