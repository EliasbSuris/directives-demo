import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CompositeDirectivesExampleComponent } from './components/composite-directives-example/composite-directives-example.component';
import { DynamicRendererComponent } from './components/dynamic-renderer/dynamic-renderer.component';
import { CompositeExampleDirective } from './directives/composite-example.directive';

@Component({
  selector: 'aor-directive-composition',
  standalone: true,
  imports: [DynamicRendererComponent, CompositeDirectivesExampleComponent, DividerModule, CompositeExampleDirective],
  templateUrl: './directive-composition.component.html',
  styleUrl: './directive-composition.component.css',
})
export class DirectiveCompositionComponent {
  clickCounter = 0;
  limitedClickCounter = 0;
  mouseOverHost = false;
  mouseOverHostClickLimit = false;
  onClicked(): void {
    this.clickCounter++;
  }
  onClickedLimited(): void {
    this.limitedClickCounter++;
  }
  onMouseEnterHost(): void {
    this.mouseOverHost = true;
  }

  onMouseLeaveHost(): void {
    this.mouseOverHost = false;
  }

  onMouseEnterHostClickLimit(): void {
    this.mouseOverHostClickLimit = true;
  }

  onMouseLeaveHostClickLimit(): void {
    this.mouseOverHostClickLimit = false;
  }
}
