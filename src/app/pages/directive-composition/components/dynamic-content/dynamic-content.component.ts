import { Component } from '@angular/core';
import { HostExampleDirective } from '../../directives/host-example.directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'aor-dynamic-content',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.css',
  hostDirectives: [
    {
      directive: HostExampleDirective,
      outputs: ['clicked'],
    },
  ],
})
export class DynamicContentComponent {
  clickCounter = 0;
  constructor(hostExampleDirective: HostExampleDirective) {
    hostExampleDirective.clicked.pipe(takeUntilDestroyed()).subscribe(() => this.clickCounter++);
  }
}
