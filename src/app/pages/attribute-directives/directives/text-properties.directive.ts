import { Directive, HostBinding, Input } from '@angular/core';

export interface TextStyle {
  color: string;
  textWeight: string;
  textSize: number;
}

@Directive({
  selector: '[aorTextStyle]',
  standalone: true,
})
export class TextStyleDirective {
  @Input()
  aorTextStyle!: TextStyle;

  @HostBinding('style.color')
  get textColor(): string {
    return this.aorTextStyle?.color ?? 'red';
  }
  @HostBinding('style.fontWeight')
  get textWeight(): string {
    return this.aorTextStyle?.textWeight ?? '400';
  }
  @HostBinding('style.fontSize.px')
  get textSize(): number {
    return this.aorTextStyle?.textSize ?? 14;
  }
}
