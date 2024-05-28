import { Routes } from '@angular/router';
import { ObjectValues } from '../types/utils.types';

export const APP_ROUTES = {
  BUILTIN_DIRECTIVES: 'builtin-directives',
  ATTRIBUTE_DIRECTIVES: 'attribute-directives',
  STRUCTURAL_DIRECTIVES: 'structural-directives',
  CONFIG_DIRECTIVES: 'config-directives',
  DIRECTIVE_COMPOSITION: 'directive-composition',
} as const;

export type AppRoute = ObjectValues<typeof APP_ROUTES>;

const DEFAULT_ROUTE: AppRoute = APP_ROUTES.BUILTIN_DIRECTIVES;

export const routes: Routes = [
  {
    path: '',
    redirectTo: DEFAULT_ROUTE,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.BUILTIN_DIRECTIVES,
    loadChildren: () => import('./pages/angular-builtin-directives/angular-builtin-directives.routes'),
  },
  {
    path: APP_ROUTES.ATTRIBUTE_DIRECTIVES,
    loadChildren: () => import('./pages/attribute-directives/attribute-directives.routes'),
  },
  {
    path: APP_ROUTES.STRUCTURAL_DIRECTIVES,
    loadChildren: () => import('./pages/structural-directives/structural-directives.routes'),
  },
  {
    path: APP_ROUTES.CONFIG_DIRECTIVES,
    loadChildren: () => import('./pages/config-directives/config-directives.routes'),
  },
  {
    path: APP_ROUTES.DIRECTIVE_COMPOSITION,
    loadChildren: () => import('./pages/directive-composition/directive-composition.routes'),
  },
];
