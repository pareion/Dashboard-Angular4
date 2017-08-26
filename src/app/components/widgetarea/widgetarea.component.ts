import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { WidgetItem } from './../../services/widgetlibrary-service/widget-item';
import { WidgetComponent } from './../../services/widgetLibrary-service/widget.component';
import { WidgetHostDirective } from './../../directives/widget-host.directive';
import { WidgetLibraryService } from '../../services/widgetLibrary-service/widget-library.service';
import { DashboardcontrollerService } from "../../services/dashboardcontroller-service/dashboardcontroller.service";
import { DashboardType } from "../../services/helperClasses/dashboard";

@Component({
  selector: 'app-widgetarea',
  templateUrl: './widgetarea.component.html',
  styleUrls: ['./widgetarea.component.css']
})
export class WidgetareaComponent {
  @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;
  
  activeWidgets: number[]; //ids of widget in order
  contentHeader: boolean;
  numCols: number; //N


  constructor(
    private widgetService: WidgetLibraryService,
    private dashboardController: DashboardcontrollerService,
    private componentFactoryResolver: ComponentFactoryResolver) {

    this.dashboardController.addWidgetEvent = (widgetId: number) => this.addWidget(widgetId);
    this.dashboardController.removeWidgetEvent = (widgetId: number) => this.removeWidget(widgetId);
    this.dashboardController.changeDashboardEvent = (dashboardId: number) => this.changeDashboard(dashboardId);
    this.activeWidgets = [];
  }

  private addWidget(widgetId: number) {
    //Get Widget
    let widget: WidgetItem = this.widgetService.getWidgetbyId(widgetId);
    
    //Resolve component
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);
    let viewContainerRef = this.widgetHost.viewContainerRef;

    //Create component into DOM and set values.
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<WidgetComponent>componentRef.instance).id = widget.id;
    (<WidgetComponent>componentRef.instance).title = widget.title;

    //Add to active Widgets list
    this.activeWidgets.push(widget.id);
  }

  private removeWidget(widgetId: number){
    //Get Widget
    let widget: WidgetItem = this.widgetService.getWidgetbyId(widgetId);

    //Resolve the component.
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);
    let viewContainerRef = this.widgetHost.viewContainerRef;

    //Find Widget index on active list
    let activeWidgetIndex: number;
    for (var index = 0; index < this.activeWidgets.length; index++) {
      if (this.activeWidgets[index] == widget.id) {
        activeWidgetIndex = index;
      }
    }
    //Remove it from the widgetarea by index.
    viewContainerRef.remove(activeWidgetIndex)
  }

  private changeDashboard(dashboardId: number){
    this.clearArea();
    this.setContentVariables(this.dashboardController.getActiveDashboard().type);
    this.activeWidgets = this.dashboardController.getActiveDashboard().widgets;
    this.activeWidgets.forEach(widgetId => {
      this.addWidget(widgetId);
    });
  }

  private clearArea(){
    let viewContainerRef = this.widgetHost.viewContainerRef;
    let componentRef = viewContainerRef.clear();
  }

  private setContentVariables(type: DashboardType) {
    switch (type) {
      case DashboardType.Standard1Col:
        this.contentHeader = false;
        this.numCols = 1;
        break;
      case DashboardType.Standard2Col:
        this.contentHeader = false;
        this.numCols = 2;
        break;
      case DashboardType.TopWidgets1Col:
        this.contentHeader = true;
        this.numCols = 1;
        break;
      case DashboardType.TopWidgets2Col:
        this.contentHeader = true;
        this.numCols = 2;
        break;
      default:
        break;
    }
  }
}