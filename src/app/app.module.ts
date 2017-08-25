import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetareaComponent } from './components/widgetarea/widgetarea.component';
import { ControlsidebarComponent } from './components/controlsidebar/controlsidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { WidgetLibraryService } from './services/widgetLibrary-service/widget-library.service';
import { WidgetHostDirective } from './directives/widget-host.directive';
import { UserService, Dashboard } from './services/user-service/user.service';
import { GmapService } from './components/widgets/stationskort/gmap.service';

import { TestboxComponent } from './components/widgets/testbox/testbox.component';
import { StationskortComponent } from './components/widgets/stationskort/stationskort.component';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    //Layout ----->
    TopmenuComponent,
    SidemenuComponent,
    FooterComponent,
    WidgetareaComponent,
    ControlsidebarComponent,
    DashboardComponent,
    WidgetHostDirective,
    //Dynamic Widgets----->
    TestboxComponent,
    StationskortComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  entryComponents: [Dashboard, TestboxComponent, StationskortComponent], //<--- Dynamic Components resgiter here
  providers: [WidgetLibraryService, UserService, GmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
