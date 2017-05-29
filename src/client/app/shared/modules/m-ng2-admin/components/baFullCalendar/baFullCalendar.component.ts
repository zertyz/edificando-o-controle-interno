import {Component, ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import 'jquery';
import 'fullcalendar/dist/fullcalendar.js';

@Component({
  moduleId: module.id,
  selector: 'ba-full-calendar',
  templateUrl: 'baFullCalendar.component.html',
  styleUrls: ['baFullCalendar.component.css']
})
export class BaFullCalendar {

  @Input() baFullCalendarConfiguration:Object;
  @Input() baFullCalendarClass:string;
  @Output() onCalendarReady = new EventEmitter<any>();

  @ViewChild('baFullCalendar') public _selector:ElementRef;

  ngAfterViewInit() {
    let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
    this.onCalendarReady.emit(calendar);
  }
}
