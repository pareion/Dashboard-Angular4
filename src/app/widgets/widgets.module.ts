import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { TestboxComponent } from './testbox/testbox.component';
import { StationskortComponent } from './stationskort/stationskort.component';
import { SpeedAverageHeatmapComponent } from './speed-average-heatmap/speed-average-heatmap.component';
import { AverageSpeedHeatmapAllStationsComponent } from './average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component';
import { DatePickerModule } from "ng2-datepicker";
import { StationCartypeAmountComponent } from './station-cartype-amount/station-cartype-amount.component';
import { TemplateDateTimePickerComponent } from './template-date-time-picker/template-date-time-picker.component';

import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

@NgModule({
  imports: [
    CommonModule,
    DatePickerModule,
    NKDatetimeModule,
    FormsModule
  ],
  declarations: [TestboxComponent, StationskortComponent, SpeedAverageHeatmapComponent, AverageSpeedHeatmapAllStationsComponent, TemplateDateTimePickerComponent, StationCartypeAmountComponent],
  schemas: [ ]
})
export class WidgetsModule { }
