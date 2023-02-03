import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { DesignUtilityService } from './appServices/design-utility.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Card1Component, Card2Component], providers: [DesignUtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
