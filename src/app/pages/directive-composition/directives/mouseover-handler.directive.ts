import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[aorMouseoverHandler]',
  standalone: true,
})
export class MouseoverHandlerDirective {
  @Output()
  mouseEnterHost = new EventEmitter<void>();
  @Output()
  mouseLeaveHost = new EventEmitter<void>();

  @HostListener('mouseenter')
  private onMouseenter(): void {
    this.mouseEnterHost.emit();
  }
  @HostListener('mouseleave')
  private onMouseleave(): void {
    this.mouseLeaveHost.emit();
  }
}
