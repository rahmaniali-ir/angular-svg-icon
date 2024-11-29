import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/introduction/introduction.component').then(
        (m) => m.IntroductionComponent
      ),
  },
  {
    path: 'documentation',
    loadComponent: () =>
      import('./pages/documentation/documentation.component').then(
        (m) => m.DocumentationComponent
      ),
  },
  {
    path: 'generation',
    loadComponent: () =>
      import('./pages/generation/generation.component').then(
        (m) => m.GenerationComponent
      ),
  },
  {
    path: 'contribution',
    loadComponent: () =>
      import('./pages/contribution/contribution.component').then(
        (m) => m.ContributionComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
