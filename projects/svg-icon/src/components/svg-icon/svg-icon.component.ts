import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IconPackService } from '../../services/icon-pack.service';

@Component({
  selector: 'svg-icon',
  standalone: true,
  template: '<i [innerHTML]="_svg"></i>',
  styleUrls: ['./svg-icon.component.sass'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  private readonly iconPack = inject(IconPackService);

  @Input()
  set name(name: string | undefined) {
    this._svg = name ? this.iconPack.getSanitizedIcon(name) : '';
  }

  _svg: SafeHtml = '';
}
