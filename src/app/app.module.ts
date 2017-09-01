//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule  } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';
>>>>>>> c4fb696304e51a85a2c80dc3b305f6a20787216d

//Layout
import { AppComponent } from './app.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetareaComponent } from './components/widgetarea/widgetarea.component';
import { ControlsidebarComponent } from './components/controlsidebar/controlsidebar.component';

//Services
import { WidgetLibraryService } from './services/widgetLibrary-service/widget-library.service';
import { WidgetHostDirective } from './directives/widget-host.directive';
import { UserService } from './services/user-service/user.service';
import { DashboardcontrollerService } from "./services/dashboardcontroller-service/dashboardcontroller.service";

import { GmapService } from './components/widgets/stationskort/gmap.service';
import { GmapSAService } from './components/widgets/speed-average-heatmap/gmap.service';

import { TestboxComponent } from './components/widgets/testbox/testbox.component';
import { StationskortComponent } from './components/widgets/stationskort/stationskort.component';

import { HttpModule } from '@angular/http';
import { TemplateDateTimePickerComponent } from './components/widgets/template-date-time-picker/template-date-time-picker.component';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

import { SpeedAverageHeatmapComponent } from './components/widgets/speed-average-heatmap/speed-average-heatmap.component';

import { DatePickerModule } from 'ng2-datepicker';
import { StationCartypeAmountComponent } from './components/widgets/station-cartype-amount/station-cartype-amount.component';
import { GmapSAASService } from './components/widgets/average-speed-heatmap-all-stations/gmap.service';


import { AverageSpeedHeatmapAllStationsComponent } from './components/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component';

//danymic components

@NgModule({
  declarations: [
    AppComponent,
    //Layout ----->
    TopmenuComponent,
    SidemenuComponent,
    FooterComponent,
    WidgetareaComponent,
    ControlsidebarComponent,
    WidgetHostDirective,
    //Dynamic Widgets----->
    TestboxComponent,
    StationskortComponent,
    SpeedAverageHeatmapComponent,
    TemplateDateTimePickerComponent,
    StationCartypeAmountComponent,
  
    AverageSpeedHeatmapAllStationsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DatePickerModule,
    NKDatetimeModule
  ],
  entryComponents: [TestboxComponent, StationskortComponent, SpeedAverageHeatmapComponent, TemplateDateTimePickerComponent, StationCartypeAmountComponent,AverageSpeedHeatmapAllStationsComponent], //<--- Dynamic Components resgiter here
  providers: [WidgetLibraryService, UserService, DashboardcontrollerService, GmapService, GmapSAService,GmapSAASService],
  bootstrap: [AppComponent]
})
export class AppModule { }
