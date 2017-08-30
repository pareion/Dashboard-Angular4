import { Component, Input, OnInit } from '@angular/core';
import { WidgetComponent } from '../../../services/widgetLibrary-service/widget.component';

@Component({
  selector: '[app-template-date-time-picker]',
  templateUrl: './template-date-time-picker.component.html',
  styleUrls: ['./template-date-time-picker.component.css']
})
export class TemplateDateTimePickerComponent  implements WidgetComponent, OnInit {
  @Input() id: number;
  @Input() title: string;

  

  constructor() { }

  ngOnInit() {
  }

}
