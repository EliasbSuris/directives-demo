import { Component } from '@angular/core';
import { HasRoleDirective } from './directives/has-role.directive';

@Component({
  selector: 'aor-structural-directives',
  standalone: true,
  imports: [HasRoleDirective],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css',
})
export class StructuralDirectivesComponent {}
