import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'projects/svg-icon/src/public-api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SvgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  tab: 'guide' | 'iconPack' = 'guide';
}
