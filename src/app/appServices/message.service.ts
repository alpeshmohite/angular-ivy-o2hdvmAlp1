import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  constructor() {}
  msgAlert(str: string) {
    alert(str);
  }
}