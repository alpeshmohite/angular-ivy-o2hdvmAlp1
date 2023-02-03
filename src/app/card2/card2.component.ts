import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appServices/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css'],
})
export class Card2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  btnClick() {
    const msg = new MessageService();
    msg.msgAlert('Card 2 alert');
  }
}
