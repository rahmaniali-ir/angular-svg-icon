import { Routes } from '@angular/router';

export const demoRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/app.component').then((c) => c.AppComponent),
  },
];
