import { makeEnvironmentProviders } from '@angular/core';
import { IconPack } from '../types/icon-pack';
import { ICON_PACK_TOKEN } from '../constants/icon-pack.token';
import { IconPackService } from '../services/icon-pack.service';

export function provideIconPack(iconPack: IconPack = {}) {
  return makeEnvironmentProviders([
    IconPackService,
    {
      provide: ICON_PACK_TOKEN,
      useValue: iconPack,
    },
  ]);
}
