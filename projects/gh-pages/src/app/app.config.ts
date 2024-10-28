import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIconPack } from 'projects/svg-icon/src/public-api';
import { iconPack } from '../constants/icon-pack.const';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIconPack(iconPack),
  ],
};
