import { Injectable } from '@angular/core';

@Injectable()
export class DesignUtilityService {
  constructor() {}

  msgAlert(str: string) {
    alert(str);
  }
  
}
