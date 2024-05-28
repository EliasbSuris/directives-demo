import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

const NUMBERS_REG_EX = /\d+/;

@Directive({
  selector: '[aorNoNumbers]',
  standalone: true,
})
export class NoNumbersDirective {
  @Output()
  keyPressed = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    this.keyPressed.emit(event.key);
    if (NUMBERS_REG_EX.test(event.key)) {
      event.preventDefault();
    }
  }
}
