import { Component, HostBinding, input } from '@angular/core';
import { SvgIconComponent } from 'projects/svg-icon/src/public-api';

@Component({
  selector: 'icon-item',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './icon-item.component.html',
  styleUrl: './icon-item.component.sass',
  host: {
    '[class.button]': 'true',
    '[class.group]': 'true',
  },
})
export class IconItemComponent {
  icon = input('');

  selected = input(false);

  view = input<'grid' | 'list'>('grid');

  @HostBinding('attr.title')
  get title() {
    return this.icon();
  }

  @HostBinding('class.active')
  @HostBinding('class.border-cyan-600')
  get isSelected() {
    return this.selected();
  }

  @HostBinding('class.w-full')
  get isListView() {
    return this.view() === 'list';
  }
}
