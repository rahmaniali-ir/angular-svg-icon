import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { IconPack } from './svg-icon';
import { DomSanitizer } from '@angular/platform-browser';

export const IconPackInjectionToken = new InjectionToken<IconPack>('Icon Pack');

@Injectable()
export class SvgIconService {
  private _iconPack: IconPack = {};

  constructor(
    private sanitizer: DomSanitizer,
    @Optional() @Inject(IconPackInjectionToken) private iconPack: IconPack = {}
  ) {
    this._iconPack = this.iconPack;
  }

  getIcon(name: string) {
    return this._iconPack[name];
  }

  getSanitizedIcon(name: string) {
    return this.sanitizer.bypassSecurityTrustHtml(this.getIcon(name));
  }

  iconExists(name: string) {
    return name in this._iconPack;
  }
}
