import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { demoRoutes } from './demo.routes';
import { provideIconPack } from 'projects/svg-icon/src/public-api';
import { iconPack } from './icon-pack';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(demoRoutes), provideIconPack(iconPack)],
}).catch((err) => console.error(err));
