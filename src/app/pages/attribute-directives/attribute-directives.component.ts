import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { TextStyle, TextStyleDirective } from './directives/text-properties.directive';
import { HighlightColorDirective } from './directives/highlight-color.directive';
import { HighlightColorV2Directive } from './directives/highlight-color-v2.directive';

@Component({
  selector: 'aor-attribute-directives',
  standalone: true,
  imports: [
    FormsModule,
    TextStyleDirective,
    HighlightColorDirective,
    HighlightColorV2Directive,
    InputNumberModule,
    InputTextModule,
    SliderModule,
    ColorPickerModule,
    DropdownModule,
    DividerModule,
  ],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css',
})
export class AttributeDirectivesComponent {
  textStyle: TextStyle = {
    color: '#ffffff',
    textWeight: '400',
    textSize: 16,
  };
  textWeightValues = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
}
