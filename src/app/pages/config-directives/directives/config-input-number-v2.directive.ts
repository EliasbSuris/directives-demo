import { Directive, ElementRef, Input, Optional, Self } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';

@Directive({
  selector: '[aorConfigInputNumberV2]',
  standalone: true,
})
export class ConfigInputNumberV2Directive {
  @Input() public resetOnLimits = false;

  constructor(
    @Self() private inputNumber: InputNumber,
    @Self() @Optional() control: NgControl,
    private el: ElementRef
  ) {
    inputNumber.buttonLayout = 'horizontal';
    inputNumber.incrementButtonIcon = 'pi pi-angle-right';
    inputNumber.decrementButtonIcon = 'pi pi-angle-left';
    inputNumber.showButtons = true;
    inputNumber.onInput.pipe(takeUntilDestroyed()).subscribe(({ value }) => {
      if (!value) {
        return;
      }
      if (this.resetOnLimits && inputNumber.max) {
        if (Number(value) > inputNumber.max) {
          console.log('value > inputNumber.max', value, inputNumber.max, control);
          if (control) {
            control.control?.setValue(inputNumber.max);
          }
          inputNumber.value = inputNumber.max;
        }
      }
      if (this.resetOnLimits && inputNumber.min) {
        if (Number(value) < inputNumber.min) {
          console.log('value < inputNumber.min', value, inputNumber.min);
          if (control) {
            control.control?.setValue(inputNumber.min);
          }
          inputNumber.value = inputNumber.min;
        }
      }
    });
  }
}
