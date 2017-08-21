import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetareaComponent } from './components/widgetarea/widgetarea.component';
import { ControlsidebarComponent } from './components/controlsidebar/controlsidebar.component';

import { WidgetLibraryService } from './services/widget-library.service';
import { WidgetHostDirective } from './directives/widget-host.directive';

import { TestboxComponent } from './components/widgets/testbox/testbox.component';

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
    TestboxComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [TestboxComponent], //<--- Dynamic Components resgiter here
  providers: [WidgetLibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
