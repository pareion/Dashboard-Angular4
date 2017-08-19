import { Component, OnInit } from '@angular/core';
import { WidgetLibraryService } from '../../services/widget-library.service';

@Component({
  selector: 'app-widgetarea',
  templateUrl: './widgetarea.component.html',
  styleUrls: ['./widgetarea.component.css']
})
export class WidgetareaComponent implements OnInit {

  constructor(private widgetService: WidgetLibraryService) {
    this.widgetService.spawn = () => this.spawn();
    this.widgetService.remove = () => this.remove();
  }

  ngOnInit() {
  }

  //TODO: Add comments
  spawn() {
    for (var index = 0; index < this.widgetService.widgetsToBeSpawned.length; index++) {
      //Find widgetarea and insert box
      var widgetarea = document.getElementById('putithere');
      widgetarea.innerHTML += this.generateBox(
        this.widgetService.widgetsToBeSpawned[index].id,
        this.widgetService.widgetsToBeSpawned[index].title,
        this.widgetService.widgetsToBeSpawned[index].spawn());
      //Done - remove the widget from the array
      this.widgetService.widgetsToBeSpawned.splice(index, 1);
    }
  }

  //TODO: Add comments
  remove() {
    for (var index = 0; index < this.widgetService.widgetsToBeRemoved.length; index++) {
      //Find widget
      var elementId = this.widgetService.widgetsToBeRemoved[index].id.toString();
      var widgetRemove = document.getElementById(elementId);
      //remove from document
      widgetRemove.remove();
      //Done - remove the widget from the array
      this.widgetService.widgetsToBeRemoved.splice(index, 1);
    }
  }

  generateBox(id: number, title: string, markup: string): string {
    //Standard box for now
    return '<div class="box box-success" id=' + id + '>' +
      '<div class="nav-tabs-custom" style="cursor: move;">' +
      '<!-- Tabs within a box -->' +
      '<ul class="nav nav-tabs pull-right ui-sortable-handle">' +
      '<li class="pull-left header"><i class="fa fa-bars"></i> ' + title + '</li>' +
      '</ul>' +
      '<div class="tab-content no-padding">' +
      '<div class=" tab-pane active" style="position: relative; height: 300px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">' +
      '<h1 style="text-align:center;">' + markup + '</h1>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }
}
