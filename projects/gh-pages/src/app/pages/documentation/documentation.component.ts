import { Component, inject } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'documentation',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.sass',
})
export class DocumentationComponent {
  private readonly sanitizer = inject(DomSanitizer);

  provideIconsCode = this.sanitizer.bypassSecurityTrustHtml(
    `import { <span class="animate-rainbow">provideIconPack</span>, <span class="animate-rainbow">IconPack</span> } from '<span class="animate-rainbow">@rahmaniali.ir/angular-svg-icon</span>';

const iconPack: <span class="animate-rainbow">IconPack</span> = {
  '<strong>exampleIcon</strong>':
    '&lt;svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"&gt; <span class="opacity-50">...</span> &lt;/svg&gt;',
};

export const appConfig: ApplicationConfig = {
  providers: [
    <span class="animate-rainbow">provideIconPack(</span>iconPack<span class="animate-rainbow">)</span>,
  ],
};`
  );

  useIconCode = this.sanitizer.bypassSecurityTrustHtml(
    `import { <span class="animate-rainbow">SvgIconComponent</span> } from '<span class="animate-rainbow">@rahmaniali.ir/angular-svg-icon</span>';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [<span class="animate-rainbow">SvgIconComponent</span>],
  template: '<span class="animate-rainbow">&lt;svg-icon name="</span><strong>exampleIcon</strong><span class="animate-rainbow">" /&gt;</span>',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {}`
  );
}
