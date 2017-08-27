import { Injectable } from '@angular/core';
import { UserService } from "../user-service/user.service";
import { Dashboard, DashboardType } from "../helperClasses/dashboard";

@Injectable()
export class DashboardcontrollerService {

  //Events for sidemenu component to call
  //Subscriber is widgetarea which will handle the event
  public addWidgetEvent: { (widgetId: number): void; };
  public removeWidgetEvent: { (widgetId: number): void; };
  public changeDashboardEvent: { (): void; };

  //Private fiels to keep track of data
  private dashboards: Dashboard[];
  private activeDashboard: Dashboard;

  constructor(private userService: UserService) {
    this.dashboards = [];
    //Setup
    this.getDashboardConfiguration();
  }

  //loads in the dashboard configuration from user service
  private getDashboardConfiguration() {
    this.dashboards = this.userService.getUserData().configuration.dashboards;

    //First load
    if (this.activeDashboard == undefined) {
      //start with the 1st one as active dashboard if there is any
      if (this.dashboards.length == 0) {
        this.activeDashboard = undefined;
      } else {
        this.activeDashboard = this.dashboards[0];
      }
    }
  }

  //Fire event to subscribers
  public changeDashboard(dashboardId: number) {
    this.getDashboardConfiguration();
    this.activeDashboard = this.dashboards.find(d => d.id == dashboardId);
    this.changeDashboardEvent();
  }

  //Fire event to subscribers
  public addWidget(widgetId: number) {
    //If no active dashboard
    if (!this.activeDashboard) {
      return;
    }
    this.userService.addWidget(widgetId, this.activeDashboard.id);
    this.addWidgetEvent(widgetId);
  }

  //Fire event to subscribers
  public removeWidget(widgetId: number) {
    //If no active dashboard
    if (!this.activeDashboard) {
      return;
    }
    this.userService.removeWidget(widgetId, this.activeDashboard.id);
    this.removeWidgetEvent(widgetId);
  }

  public removeDashboard(dashboardId: number) {
    this.userService.removeDashboard(dashboardId);
    //Update
    if (this.activeDashboard.id == dashboardId) {
      this.getDashboardConfiguration();
    }
  }

  public addDashboard(dashboard: Dashboard) {
    this.userService.saveDashboard(dashboard);
  }

  public getDashboards(): Dashboard[] {
    return this.dashboards;
  }

  public getActiveDashboard(): Dashboard {
    //bug fix - Widgets became duplicated?
    this.activeDashboard.widgets =
      this.activeDashboard.widgets.filter(function (elem, index, self) {
        return index == self.indexOf(elem);
      })
    return this.activeDashboard;
  }
}