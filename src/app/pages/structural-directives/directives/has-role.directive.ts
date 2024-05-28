import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

const roles = ['admin', 'editor', 'user'];

@Directive({
  selector: '[aorHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  private elseTemplate!: TemplateRef<unknown>;
  private hasRole!: boolean;
  private role!: string;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input()
  set aorHasRole(value: string) {
    this.role = value;
    this.hasRole = roles.includes(value);
    this.updateContainer();
  }

  @Input()
  set aorHasRoleElse(template: TemplateRef<unknown>) {
    this.elseTemplate = template;
    this.updateContainer();
  }

  private updateContainer(): void {
    if (this.hasRole) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else if (this.elseTemplate) {
      this.viewContainerRef.createEmbeddedView(this.elseTemplate, {
        $implicit: this.role,
      });
    } else {
      this.viewContainerRef.clear();
    }
  }
}
