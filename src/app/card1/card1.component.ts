import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';
import { MessageService } from '../appServices/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css'],
})
export class Card1Component implements OnInit {
  constructor(private _msgService: DesignUtilityService) {}
  product: any;
  ngOnInit() {
    //this.product = this._msgService.product.name;
  }
  // btnClick() {
  //   const msg = new MessageService();
  //   msg.msgAlert("Card 1 alert");
  // }

  btnClick() {
    this._msgService.msgAlert('Card 1 alert called');
    //this._msgService.product = '';
  }
}
