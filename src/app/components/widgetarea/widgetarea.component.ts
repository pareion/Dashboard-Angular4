import { Configuration, User, UserService } from './../../services/user-service/user.service';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { WidgetItem } from './../../services/widgetlibrary-service/widget-item';
import { WidgetComponent } from './../../services/widgetLibrary-service/widget.component';
import { WidgetHostDirective } from './../../directives/widget-host.directive';
import { WidgetLibraryService } from '../../services/widgetLibrary-service/widget-library.service';


@Component({
  selector: 'app-widgetarea',
  templateUrl: './widgetarea.component.html',
  styleUrls: ['./widgetarea.component.css']
})
export class WidgetareaComponent {
  @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;
  dashboards: DashboardComponent[];


  constructor(
    private userService: UserService,
    private widgetService: WidgetLibraryService,
    private componentFactoryResolver: ComponentFactoryResolver) {

    this.dashboards = [];
    this.initFromConfig(this.userService.user.configuration);
    this.widgetService.spawn = () => this.spawn(); //Subscribe to event
    this.widgetService.remove = () => this.remove(); //Subscribe to event
  }

  private initFromConfig(config: Configuration) {
    for (var index = 0; index < config.dashboards.length; index++) {
      let id = config.dashboards[index].id;
      let name = config.dashboards[index].name;
      let type = config.dashboards[index].type;
      let activewidgets = config.dashboards[index].widgets;
      let board = new DashboardComponent(id, type, name, this.componentFactoryResolver); //Wat? why factory resolver?

      //spawn widgets on board <--- only spawn on active board?
      for (var index = 0; index < activewidgets.length; index++) {
        this.spawnWidget(activewidgets[index], id);
      }
    }
  }

  spawn(){
  }

  remove(){

  }

  //Subscriber method for spawning the standard widget into DOM.
  spawnWidget(widgetId: number, dashboardId: number) {
    //find widget
    let widget: WidgetItem;
    for (var index = 0; index < this.widgetService.widgetsToBeSpawned.length; index++) {
      widget = this.widgetService.widgetsToBeSpawned[index];

      //Find dashboard and spawn widget there
      for (var index = 0; index < this.dashboards.length; index++) {
        if (this.dashboards[index].id == dashboardId) {
          this.dashboards[index].spawnWidget(widget);
        }
      }
      //Done - Remove from list.
      this.widgetService.widgetsToBeSpawned.splice(index, 1);
    }
  }

  //Subscriber method for clearing the standard widget into DOM.
  removeWidget(widgetId: number, dashboardId: number) {
     //find widget
     let widget: WidgetItem;
     for (var index = 0; index < this.widgetService.widgetsToBeRemoved.length; index++) {
       widget = this.widgetService.widgetsToBeRemoved[index];
 
       //Find dashboard and spawn widget there
       for (var index = 0; index < this.dashboards.length; index++) {
         if (this.dashboards[index].id == dashboardId) {
           this.dashboards[index].removeWidget(widget);
         }
       }
       //Done - Remove from list.
       this.widgetService.widgetsToBeRemoved.splice(index, 1);
    }
  }
}