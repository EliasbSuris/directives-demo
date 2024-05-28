import { Directive, OnInit, Self } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';

@Directive({
  selector: '[aorConfigInputNumber]',
  standalone: true,
})
export class ConfigInputNumberDirective implements OnInit {
  constructor(@Self() private inputNumber: InputNumber) {}

  ngOnInit(): void {
    this.inputNumber.mode = 'decimal';
    this.inputNumber.buttonLayout = 'horizontal';
    this.inputNumber.incrementButtonIcon = 'pi pi-angle-right';
    this.inputNumber.decrementButtonIcon = 'pi pi-angle-left';
    this.inputNumber.showButtons = true;
  }
}
