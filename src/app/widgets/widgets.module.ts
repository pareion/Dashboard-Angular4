import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { TestboxComponent } from './testbox/testbox.component';
import { StationskortComponent } from './stationskort/stationskort.component';
import { SpeedAverageHeatmapComponent } from './speed-average-heatmap/speed-average-heatmap.component';
import { AverageSpeedHeatmapAllStationsComponent } from './average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component';
import { DatePickerModule } from "ng2-datepicker";

@NgModule({
  imports: [
    CommonModule,
    DatePickerModule,
    FormsModule
  ],
  declarations: [TestboxComponent, StationskortComponent, SpeedAverageHeatmapComponent, AverageSpeedHeatmapAllStationsComponent ],
  schemas: [ ]
})
export class WidgetsModule { }
