import { Component } from '@angular/core';
import { SvgIconComponent } from 'projects/svg-icon/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {}
