import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgIconService } from './svg-icon.service';

@Component({
  selector: 'svg-icon',
  template: '<i [innerHTML]="_svg"></i>',
  styleUrls: ['./svg-icon.component.sass'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @Input()
  set name(name: string | undefined) {
    if (name) this._svg = this.iconPack.getSanitizedIcon(name);
  }

  _svg: SafeHtml = '';

  constructor(private iconPack: SvgIconService) {}
}
