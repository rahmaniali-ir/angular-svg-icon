import { Component, inject } from '@angular/core';
import { optimizeSvg } from '../../../utils/optimizer.util';
import { IconItemComponent } from '../../components/icon-item/icon-item.component';
import {
  IconPackService,
  SvgIconComponent,
} from 'projects/svg-icon/src/public-api';

@Component({
  selector: 'generation',
  standalone: true,
  imports: [SvgIconComponent, IconItemComponent],
  templateUrl: './generation.component.html',
  styleUrl: './generation.component.sass',
})
export class GenerationComponent {
  private readonly iconPack = inject(IconPackService);

  icons: string[] = [];
  selectedIcon?: string;
  selectedView: 'grid' | 'list' = 'grid';

  selectView(view: 'grid' | 'list') {
    this.selectedView = view;
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
            )
            .replace(/fill="url(.*?)"/, 'fill="currentColor"');

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
