import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  IconPackService,
  SvgIconComponent,
} from 'projects/svg-icon/src/public-api';
import { optimizeSvg } from '../utils/optimizer.util';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  private readonly iconPack = inject(IconPackService);
  tab: 'guide' | 'iconPack' = 'guide';
  icons: string[] = [];
  selectedIcon?: string;

  selectTab(tab: 'guide' | 'iconPack') {
    this.tab = tab;
  }

  onFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const { files } = target;

    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (!file) continue;

      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          if (typeof reader.result !== 'string') return;

          const fileName = file.name.replace(/\.svg$/, '');

          const optimized = optimizeSvg(reader.result)
            .replace(/fill="#(\w|\d){3,6}"/gi, `fill="currentColor"`)
            .replace(
              /stroke="#(\w|\d){3,6}"/gi,
              `fill="none" stroke="currentColor"`
            );

          if (this.iconPack.iconExists(fileName)) {
            this.icons = this.icons.filter((icon) => icon !== fileName);
          }

          this.iconPack.setIcon(fileName, optimized);
          this.icons.push(fileName);
        },
        {
          once: true,
        }
      );
      reader.readAsText(file);
    }
  }

  selectIcon(icon?: string) {
    this.selectedIcon = !icon || this.selectedIcon === icon ? undefined : icon;
  }
}
