import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { WidgetareaComponent } from './components/widgetarea/widgetarea.component';
import { ControlsidebarComponent } from './components/controlsidebar/controlsidebar.component';

import { WidgetLibraryService } from './services/widget-library.service';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    SidemenuComponent,
    FooterComponent,
    WidgetareaComponent,
    ControlsidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WidgetLibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
