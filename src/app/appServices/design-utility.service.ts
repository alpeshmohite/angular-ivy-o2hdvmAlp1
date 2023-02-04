import { Injectable } from '@angular/core';

@Injectable()
export class DesignUtilityService {
  constructor() {}

  msgAlert(str: string) {
    alert(str);
  }

  //product = 'Laptop';
  product = { name: 'Laptop', id: '1' };
  product1 = { name: 'Mobile', aaaa: '1' };
}
