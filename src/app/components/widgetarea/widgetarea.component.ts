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
  }

  ngOnInit() {
  }

  spawn(){
    //Test
    for (var index = 0; index < this.widgetService.widgetsToBeSpawned.length; index++) {
      console.log(this.widgetService.widgetsToBeSpawned[index].title);
      this.widgetService.widgetsToBeSpawned.splice(index,1);
      
    }
  }

}
