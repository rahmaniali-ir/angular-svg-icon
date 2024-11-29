import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'projects/svg-icon/src/public-api';

interface Link {
  name: string;
  title: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SvgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  links: Link[] = [
    {
      name: 'introduction',
      title: 'Introduction',
      icon: '::gh-pages::shapes',
      route: '/',
    },
    {
      name: 'documentation',
      title: 'Documentation',
      icon: '::gh-pages::code',
      route: '/documentation',
    },
    {
      name: 'generation',
      title: 'Generation',
      icon: '::gh-pages::package',
      route: '/generation',
    },
    {
      name: 'contribution',
      title: 'Contribution',
      icon: '::gh-pages::github',
      route: '/contribution',
    },
  ];
}
