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
  datepickerOpts = {
      startDate: new Date().getDate,
      autoclose: true,
      todayBtn: 'linked',
      todayHighlight: true,
      assumeNearbyYear: true,
      format: 'D, d MM yyyy'
  }


  constructor() { }

  ngOnInit() {
  }

}
