import { Component } from '@angular/core';
import { SvgIconComponent } from 'projects/svg-icon/src/public-api';

@Component({
  selector: 'introduction',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.sass',
})
export class IntroductionComponent {}
