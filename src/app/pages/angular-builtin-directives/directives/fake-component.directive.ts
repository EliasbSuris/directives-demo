import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'aor-fake-component',
  standalone: true,
})
export class FakeComponentDirective {
  constructor(private viewContainerRef: ViewContainerRef) {}
  @Input()
  set template(template: TemplateRef<unknown>) {
    if (!template) {
      return;
    }
    this.viewContainerRef.createEmbeddedView(template);
  }
}
