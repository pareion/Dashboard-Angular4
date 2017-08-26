import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { WidgetItem } from './../../services/widgetlibrary-service/widget-item';
import { WidgetComponent } from './../../services/widgetLibrary-service/widget.component';
import { WidgetHostDirective } from './../../directives/widget-host.directive';
import { WidgetLibraryService } from '../../services/widgetLibrary-service/widget-library.service';
import { DashboardcontrollerService } from "../../services/dashboardcontroller-service/dashboardcontroller.service";
import { DashboardType } from "../../services/user-service/user.service";

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

  }

  private removeWidget(widgetId: number){

  }

  private changeDashboard(dashboardId: number){
    this.clearArea();
    this.activeWidgets = this.dashboardController.getActiveDashboard().widgets;
    this.setContentVariables(this.dashboardController.getActiveDashboard().type);
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