import { Injectable } from '@angular/core';
import { WidgetItem } from './widget-item';

//Component Import - Add here when you register component ---------->
import { TestboxComponent } from './../../components/widgets/testbox/testbox.component';
import { StationskortComponent } from './../../components/widgets/stationskort/stationskort.component';
import { SpeedAverageHeatmapComponent } from './../../components/widgets/speed-average-heatmap/speed-average-heatmap.component';
//<------------------------------------------------------------------

@Injectable()
export class WidgetLibraryService {
  widgets: WidgetItem[];
  widgetsToBeSpawned: WidgetItem[];
  widgetsToBeRemoved: WidgetItem[];
  public spawn: { (): void; }; //<--- acts like a delegate that will fire event
  public remove: { (): void; }; //<--- acts like a delegate that will fire event

  constructor() {
    //init the array
    this.widgets = [];
    this.widgetsToBeSpawned = [];
    this.widgetsToBeRemoved = [];
    //Register all widgets here
    this.widgets.push(new WidgetItem(TestboxComponent, 1, 'Test Boks'));
    this.widgets.push(new WidgetItem(StationskortComponent, 2, 'Stationskort'));
    this.widgets.push(new WidgetItem(SpeedAverageHeatmapComponent, 3, "SpeedAverageHeatmapComponent"))
    //--------> Add more here

    //Sort array based on title name
    this.widgets.sort(function (a, b) {
      var nameA = a.title.toUpperCase();
      var nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      //same names
      return 0;
    });
  }

  //Finds widget based on id and fires spawn event. 
  //Used by SideMenu
  spawnWidget(id: number) {
    for (var index = 0; index < this.widgets.length; index++) {
      if (this.widgets[index].id == id) {
        this.widgetsToBeSpawned.push(this.widgets[index]);
        this.spawn();
        break;
      }
    }
  }

  //Finds widget based on id and fires remove event.
  //Ised by SideMenu
  removeWidget(id: number) {
    for (var index = 0; index < this.widgets.length; index++) {
      if (this.widgets[index].id == id) {
        this.widgetsToBeRemoved.push(this.widgets[index]);
        this.remove();
        break;
      }
    }
  }
}