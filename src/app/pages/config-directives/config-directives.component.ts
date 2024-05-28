import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfigInputNumberV2Directive } from './directives/config-input-number-v2.directive';
import { ConfigInputNumberDirective } from './directives/config-input-number.directive';
import { NoNumbersDirective } from './directives/no-numbers.directive';
import { CalendarConfigDirective } from './directives/calendar-config.directive';

@Component({
  selector: 'aor-config-directives',
  standalone: true,
  imports: [
    DividerModule,
    InputNumberModule,
    ConfigInputNumberDirective,
    ConfigInputNumberV2Directive,
    FormsModule,
    NoNumbersDirective,
    CalendarModule,
    CalendarConfigDirective,
  ],

  templateUrl: './config-directives.component.html',
  styleUrl: './config-directives.component.css',
})
export class ConfigDirectivesComponent {
  value = 0;
  keyPressed!: string;
}
