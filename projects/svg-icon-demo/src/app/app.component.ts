import { Component, inject } from '@angular/core';
import {
  IconPackService,
  SvgIconComponent,
} from 'projects/svg-icon/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  private readonly iconPack = inject(IconPackService);

  constructor() {
    // this.iconPack.setIcon('', 'ECT');
  }
}
