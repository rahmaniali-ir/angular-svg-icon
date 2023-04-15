import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgIconModule } from 'projects/svg-icon/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SvgIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
