import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[aorHostExample]',
  standalone: true,
})
export class HostExampleDirective {
  @Output()
  clicked = new EventEmitter<void>();
  @HostListener('click')
  private onClick(): void {
    this.clicked.emit();
  }
}
