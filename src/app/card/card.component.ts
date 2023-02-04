import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private _obj: DesignUtilityService) {}

  ngOnInit() {}
  
}
