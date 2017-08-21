import { Component, Input, OnInit } from '@angular/core';
import { WidgetComponent } from '../../../services/widget.component';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements WidgetComponent, OnInit {
  @Input() id: number;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
