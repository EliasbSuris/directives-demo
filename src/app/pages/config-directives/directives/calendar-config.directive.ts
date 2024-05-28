import { Directive } from '@angular/core';
import { Calendar } from 'primeng/calendar';

@Directive({
  selector: '[aorCalendarConfig]',
  standalone: true,
})
export class CalendarConfigDirective {
  constructor(calendar: Calendar) {
    calendar.dateFormat = 'dd/mm/yy';
    calendar.showIcon = true;
    calendar.appendTo = 'body';
    calendar.showButtonBar = true;
    calendar.showTime = false;
    calendar.showSeconds = false;
  }
}
