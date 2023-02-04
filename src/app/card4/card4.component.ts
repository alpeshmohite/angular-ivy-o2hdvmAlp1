import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css'],
})
export class Card4Component implements OnInit {
  product = 'test card product 4';
  constructor(private _message: DesignUtilityService) {}

  ngOnInit() {
    //this.product = this._message.product.id;
  }
  showMessage() {
    //alert('Card 4 called.');
    this._message.msgAlert('Called from card 4');
  }
}
