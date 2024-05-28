import { Component, ViewContainerRef } from '@angular/core';
import { DynamicContentComponent } from '../dynamic-content/dynamic-content.component';

@Component({
  selector: 'aor-dynamic-renderer',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-renderer.component.html',
  styleUrl: './dynamic-renderer.component.css',
})
export class DynamicRendererComponent {
  message!: string;
  constructor(private viewContainer: ViewContainerRef) {
    this.viewContainer.createComponent(DynamicContentComponent);
  }
}
