import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetareaComponent } from './components/widgetarea/widgetarea.component';
import { ControlsidebarComponent } from './components/controlsidebar/controlsidebar.component';

import { WidgetLibraryService } from './services/widgetLibrary-service/widget-library.service';
import { WidgetHostDirective } from './directives/widget-host.directive';
import { UserService } from './services/user-service/user.service';
import { DashboardcontrollerService } from "./services/dashboardcontroller-service/dashboardcontroller.service";
import { GmapService } from './components/widgets/stationskort/gmap.service';

import { TestboxComponent } from './components/widgets/testbox/testbox.component';
import { StationskortComponent } from './components/widgets/stationskort/stationskort.component';

import { HttpModule } from '@angular/http';
import { TemplateDateTimePickerComponent } from './components/widgets/template-date-time-picker/template-date-time-picker.component';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

import { SpeedAverageHeatmapComponent } from './components/widgets/speed-average-heatmap/speed-average-heatmap.component';

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
    TemplateDateTimePickerComponent,
    SpeedAverageHeatmapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NKDatetimeModule
  ],
  entryComponents: [TestboxComponent, StationskortComponent, TemplateDateTimePickerComponent,SpeedAverageHeatmapComponent], //<--- Dynamic Components resgiter here
  providers: [WidgetLibraryService, UserService, DashboardcontrollerService, GmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
