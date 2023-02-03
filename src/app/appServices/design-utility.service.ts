import { Injectable } from '@angular/core';

@Injectable()
export class DesignUtilityService {
  constructor() {}

  msgAlert(str: string) {
    alert(str);
  }

  //product = 'Mobile';
  product = { name: 'Mobile', id: '1' };
}
