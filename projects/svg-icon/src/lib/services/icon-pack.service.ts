import { Inject, inject, Injectable } from '@angular/core';
import { IconPack } from '../types/icon-pack';
import { DomSanitizer } from '@angular/platform-browser';
import { ICON_PACK_TOKEN } from '../constants/icon-pack.token';

@Injectable()
export class IconPackService {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly iconPack = new Map<string, string>();

  constructor(@Inject(ICON_PACK_TOKEN) iconPack: IconPack = {}) {
    this.setIconPack(iconPack);
  }

  setIconPack(iconPack: IconPack) {
    this.iconPack.clear();

    for (let iconName in iconPack) {
      this.iconPack.set(iconName, iconPack[iconName]);
    }
  }

  setIcon(name: string, value: string) {
    this.iconPack.set(name, value);
  }

  getIcon(name: string) {
    return this.iconPack.get(name);
  }

  getSanitizedIcon(name: string) {
    return this.sanitizer.bypassSecurityTrustHtml(this.getIcon(name) ?? '');
  }

  iconExists(name: string) {
    return this.iconPack.has(name);
  }

  deleteIcon(name: string) {
    this.iconPack.delete(name);
  }
}
