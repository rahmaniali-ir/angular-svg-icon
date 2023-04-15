import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgIconModule } from 'svg-icon';
import { iconPack } from './icon-pack';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SvgIconModule.config({
      iconPack,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
