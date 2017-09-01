//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';

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
import { GmapSAASService } from './components/widgets/average-speed-heatmap-all-stations/gmap.service';

//danymic components
import { TestboxComponent } from './components/widgets/testbox/testbox.component';
import { StationskortComponent } from './components/widgets/stationskort/stationskort.component';
import { SpeedAverageHeatmapComponent } from './components/widgets/speed-average-heatmap/speed-average-heatmap.component';
import { AverageSpeedHeatmapAllStationsComponent } from './components/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component';

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
    AverageSpeedHeatmapAllStationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DatePickerModule,
    HttpModule
  ],
<<<<<<< HEAD
  entryComponents: [TestboxComponent, StationskortComponent, SpeedAverageHeatmapComponent, AverageSpeedHeatmapAllStationsComponent], //<--- Dynamic Components resgiter here
  providers: [WidgetLibraryService, UserService, DashboardcontrollerService, GmapService, GmapSAService, GmapSAASService ],
=======
  entryComponents: [TestboxComponent, StationskortComponent, SpeedAverageHeatmapComponent], //<--- Dynamic Components resgiter here
  providers: [WidgetLibraryService, UserService, DashboardcontrollerService, 
    GmapService, GmapSAService], 
>>>>>>> 9f33b0967bba7d22f68652253435c77be0eab8a9

  bootstrap: [AppComponent]
})
export class AppModule { }
