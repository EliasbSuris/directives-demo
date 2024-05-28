import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[aorHighlightColorV2]',
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'highlighted',
  },
})
export class HighlightColorV2Directive {
  @Input()
  highlightColor!: string;
  private _backGroundColor = '';

  constructor(private readonly element: ElementRef) {
    fromEvent(this.element.nativeElement, 'mouseenter')
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.highlight(this.highlightColor));
    fromEvent(this.element.nativeElement, 'mouseleave')
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.highlight(''));
  }

  @HostBinding('style.background-color')
  get backgroundColor(): string {
    return this._backGroundColor;
  }

  highlight(color: string): void {
    this._backGroundColor = color;
  }
}
