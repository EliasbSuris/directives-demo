import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[aorHighlightColor]',
  standalone: true,
})
export class HighlightColorDirective {
  @Input()
  highlightColor!: string;
  @HostBinding('class.highlighted')
  private _backGroundColor = '';

  @HostBinding('style.backgroundColor')
  get backgroundColor(): string {
    return this._backGroundColor;
  }
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.highlightColor);
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight('');
  }

  highlight(color: string): void {
    this._backGroundColor = color;
  }
}
