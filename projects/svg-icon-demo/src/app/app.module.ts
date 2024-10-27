import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { iconPack } from './icon-pack';
import { SvgIconModule } from 'projects/svg-icon/src/public-api';

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
