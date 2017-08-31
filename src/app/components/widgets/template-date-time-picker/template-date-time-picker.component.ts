import { Component, Input, OnInit } from '@angular/core';
import { WidgetComponent } from '../../../services/widgetLibrary-service/widget.component';

import * as $ from 'jquery';

@Component({
  selector: '[app-template-date-time-picker]',
  templateUrl: './template-date-time-picker.component.html',
  styleUrls: ['./template-date-time-picker.component.css']
})
export class TemplateDateTimePickerComponent  implements WidgetComponent, OnInit {
  @Input() id: number;
  @Input() title: string;

  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  
  apidate: string;
  apiMinutes: string;

  datepickerOpts = {
    autoclose: true,
    todayHighlight: true,
    assumeNearbyYear: true,
    format: 'd MM yyyy'
}

  constructor() { }

  ngOnInit() {
  }

 //test
  getDate(dt: Date): string {
    return dt.toISOString().slice(0,10) + " " +  dt.getHours() + ":" + (dt.getMinutes()<10?'0':'') + dt.getMinutes();
    //dt.toLocaleTimeString();
  }


}
