import { Component, ElementRef, viewChild } from '@angular/core';
import { copyTextToClipboard } from 'projects/gh-pages/src/utils/clipboard.util';
import { SvgIconComponent } from 'projects/svg-icon/src/public-api';

@Component({
  selector: 'code-block',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.sass',
})
export class CodeBlockComponent {
  codeBlock = viewChild('codeBlock', { read: ElementRef<HTMLElement> });

  copy() {
    const block = this.codeBlock();
    const code = block?.nativeElement.innerText;

    if (code) copyTextToClipboard(code);
  }
}
