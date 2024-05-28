import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[aorClickHandler]',
  standalone: true,
})
export class ClickHandlerDirective {
  @Input()
  maxNumberOfClicks!: number;
  @Output()
  clicked = new EventEmitter<void>();

  private numberOfClicks = 0;
  @HostListener('click')
  private onClick(): void {
    this.numberOfClicks++;
    if (!this.maxNumberOfClicks || this.numberOfClicks <= this.maxNumberOfClicks) {
      this.clicked.emit();
    }
  }
}
