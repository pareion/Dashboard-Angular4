import { Component, Input, OnInit } from '@angular/core';
import { WidgetComponent } from '../../../services/widget.component';

@Component({
  selector: 'app-testbox',
  templateUrl: './testbox.component.html',
  styleUrls: ['./testbox.component.css']
})
export class TestboxComponent implements WidgetComponent, OnInit {
  @Input() id: number;
  @Input() title: string;

  //constructor() { }
  ngOnInit() {
    alert("Hello");
  }
}
