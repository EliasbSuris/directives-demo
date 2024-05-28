import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FakeComponentDirective } from './directives/fake-component.directive';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'aor-angular-builtin-directives',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule, InputTextModule, FakeComponentDirective, DividerModule],
  templateUrl: './angular-builtin-directives.component.html',
  styleUrl: './angular-builtin-directives.component.css',
})
export class AngularBuiltinDirectivesComponent {
  value = 'Hello World!';
  classes = {
    purple: true,
  };
}
