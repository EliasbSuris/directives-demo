import { Component, Input } from '@angular/core';

@Component({
  selector: 'aor-composite-directives-example',
  standalone: true,
  imports: [],
  templateUrl: './composite-directives-example.component.html',
  styleUrl: './composite-directives-example.component.css',
})
export class CompositeDirectivesExampleComponent {
  @Input()
  counter = 0;
  @Input()
  maxNumberOfClicks!: number;
}
