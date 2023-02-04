import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css'],
})
export class Card3Component implements OnInit {
  product = 'test card product';
  constructor(private _message: DesignUtilityService) {}

  ngOnInit() {
    //this.product = this._message.product.name;
  }

  showMessage() {
    // alert('Card 3 call');
    this._message.msgAlert(' ...Called Card 3.');
  }
}
