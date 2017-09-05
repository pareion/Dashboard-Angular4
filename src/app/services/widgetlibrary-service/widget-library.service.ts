import { Injectable, CompilerFactory, ApplicationRef, Compiler } from '@angular/core';
import { WidgetItem } from './widget-item';

<<<<<<< HEAD
//Component Import - Add here when you register component ---------->
import { TestboxComponent } from './../../components/widgets/testbox/testbox.component';
import { StationskortComponent } from './../../components/widgets/stationskort/stationskort.component';
import { TemplateDateTimePickerComponent } from './../../components/widgets/template-date-time-picker/template-date-time-picker.component';
import { SpeedAverageHeatmapComponent } from './../../components/widgets/speed-average-heatmap/speed-average-heatmap.component';
import { StationCartypeAmountComponent } from './../../components/widgets/station-cartype-amount/station-cartype-amount.component';
import { AverageSpeedHeatmapAllStationsComponent } from './../../components/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component';
//<------------------------------------------------------------------
=======
import {WidgetsModule} from '../../widgets/widgets.module';
>>>>>>> b815e0980bff88a626085226e16bf6b1e1754b6f

@Injectable()
export class WidgetLibraryService {
  widgets: Map<number, WidgetItem>;
  compiler: Compiler;

  constructor(cFactory: CompilerFactory, appRef: ApplicationRef) {
    this.widgets = new Map<number, WidgetItem>();

    //Register all widgets here
<<<<<<< HEAD
    this.widgets.push(new WidgetItem(TestboxComponent, 1, 'Test Boks'));
    this.widgets.push(new WidgetItem(StationskortComponent, 2, 'Stationskort'));
    this.widgets.push(new WidgetItem(SpeedAverageHeatmapComponent, 3, "Heatmap gennemsnitshastighed"))
    this.widgets.push(new WidgetItem(TemplateDateTimePickerComponent, 4, 'Datetime picker'));
    this.widgets.push(new WidgetItem(StationCartypeAmountComponent, 6, 'Antal biltyper på station'));
    this.widgets.push(new WidgetItem(SpeedAverageHeatmapComponent, 5, "SpeedAverageHeatmapComponent"))
    this.widgets.push(new WidgetItem(AverageSpeedHeatmapAllStationsComponent, 7, "Average Speed Heatmap All Stations"))
    //--------> Add more here
=======
    this.compiler = cFactory.createCompiler();
    
      let fac = this.compiler.compileModuleAndAllComponentsSync(WidgetsModule);
      
      fac.componentFactories.forEach((facto) => {
        let title = facto.inputs.find((obj) => {return obj.propName === "title"});
        let i = (facto.inputs.find((obj) => {return obj.propName === "id"}));
>>>>>>> b815e0980bff88a626085226e16bf6b1e1754b6f

        if (title) {
          let id = Number.parseInt(i.templateName);
          let wItem = new WidgetItem(facto, id, title.templateName);
          this.widgets.set(id, wItem);
        }
      });
      console.log("generated widgets");
  }

  public getWidgetbyId(widgetId: number): WidgetItem {
    return this.widgets.get(widgetId);
  }
}