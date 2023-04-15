import { ModuleWithProviders, NgModule } from '@angular/core';
import { SvgIconComponent } from './svg-icon.component';
import { SvgIconModuleConfig } from './svg-icon';
import { IconPackInjectionToken, SvgIconService } from './svg-icon.service';

@NgModule({
  declarations: [SvgIconComponent],
  imports: [],
  exports: [SvgIconComponent],
})
export class SvgIconModule {
  static config(
    config?: SvgIconModuleConfig
  ): ModuleWithProviders<SvgIconModule> {
    return {
      ngModule: SvgIconModule,
      providers: [
        SvgIconService,
        {
          provide: IconPackInjectionToken,
          useValue: config?.iconPack || {},
        },
      ],
    };
  }
}
