import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { DesignUtilityService } from './appServices/design-utility.service';

import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
