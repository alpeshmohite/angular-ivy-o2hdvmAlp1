import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';
import { MessageService } from '../appServices/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css'],
})
export class Card2Component implements OnInit {
  constructor(private _msgService: DesignUtilityService) {}

  ngOnInit() {}

  // btnClick() {
  //   const msg = new MessageService();
  //   msg.msgAlert('Card 2 alert');
  // }

  btnClick() {
    this._msgService.msgAlert("Card 2 alert call");
  }
}
