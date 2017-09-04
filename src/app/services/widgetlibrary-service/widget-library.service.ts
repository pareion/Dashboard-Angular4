import { Injectable } from '@angular/core';
import { WidgetItem } from './widget-item';

//Component Import - Add here when you register component ---------->
import { TestboxComponent } from './../../components/widgets/testbox/testbox.component';
import { StationskortComponent } from './../../components/widgets/stationskort/stationskort.component';
import { TemplateDateTimePickerComponent } from './../../components/widgets/template-date-time-picker/template-date-time-picker.component';
import { SpeedAverageHeatmapComponent } from './../../components/widgets/speed-average-heatmap/speed-average-heatmap.component';
import { StationCartypeAmountComponent } from './../../components/widgets/station-cartype-amount/station-cartype-amount.component';
import { AverageSpeedHeatmapAllStationsComponent } from './../../components/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component';
//<------------------------------------------------------------------

@Injectable()
export class WidgetLibraryService {
  widgets: WidgetItem[];

  constructor() {
    //init the array
    this.widgets = [];
    //Register all widgets here
    this.widgets.push(new WidgetItem(TestboxComponent, 1, 'Test Boks'));
    this.widgets.push(new WidgetItem(StationskortComponent, 2, 'Stationskort'));
    this.widgets.push(new WidgetItem(SpeedAverageHeatmapComponent, 3, "Heatmap gennemsnitshastighed"))
    this.widgets.push(new WidgetItem(TemplateDateTimePickerComponent, 4, 'Datetime picker'));
    this.widgets.push(new WidgetItem(StationCartypeAmountComponent, 6, 'Antal biltyper på station'));
    this.widgets.push(new WidgetItem(SpeedAverageHeatmapComponent, 5, "SpeedAverageHeatmapComponent"))
    this.widgets.push(new WidgetItem(AverageSpeedHeatmapAllStationsComponent, 7, "Average Speed Heatmap All Stations"))
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

  public getWidgetbyId(widgetId: number): WidgetItem {
    return this.widgets.find(w => w.id == widgetId);
  }
}