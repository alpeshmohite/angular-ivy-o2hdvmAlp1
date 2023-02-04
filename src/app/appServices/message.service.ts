import { Injectable } from '@angular/core';
import{} from '../appServices/design-utility.service'

@Injectable()
export class MessageService {
  constructor() {}
  msgAlert(str: string) {
    alert(str);
  }
}
