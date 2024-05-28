import { Directive, HostBinding, Input } from '@angular/core';
import { ClickHandlerDirective } from './click-handler.directive';
import { MouseoverHandlerDirective } from './mouseover-handler.directive';

@Directive({
  selector: '[aorCompositeExample]',
  standalone: true,
  hostDirectives: [
    {
      directive: ClickHandlerDirective,
      outputs: ['clicked'],
      inputs: ['maxNumberOfClicks'],
    },
    {
      directive: MouseoverHandlerDirective,
      outputs: ['mouseEnterHost', 'mouseLeaveHost'],
    },
  ],
})
export class CompositeExampleDirective {
  @Input()
  @HostBinding('class.mouse-over-host')
  mouseOverHost = false;
}
