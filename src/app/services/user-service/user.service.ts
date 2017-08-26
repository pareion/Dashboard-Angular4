import { Injectable } from '@angular/core';
import { User } from "../helperClasses/user";
import { Configuration } from "../helperClasses/configuration";
import { Dashboard, DashboardType } from "../helperClasses/dashboard";

@Injectable()
export class UserService {
  user: User;

  constructor() {
    //No login implemented yet.
    //Test login. Remove this when login is implemented.
    this.getUserData();
  }

  public getUserData() {
    //if authenticated
    //Get user from server
    //Store in user variable

    //Test - Last parameter is null, so a configuration will be generated
    let d = new Dashboard(1, "Standard2Col", DashboardType.Standard2Col, [1,2]);
    let d2 = new Dashboard(2, "Content2col", DashboardType.TopWidgets2Col, [2,1]);
    let das = [];
    das.push(d);
    das.push(d2);
    let config = new Configuration(das);
    this.user = new User("Jeppe", "Ærenlund", "IT & Digitalisering", "Praktikant", config);
  }

  public removeDashboard(dashboardId: number) {
    //Call api to remove

    //Remove from local data
    let dashboard;
    for (var index = 0; index < this.user.configuration.dashboards.length; index++) {
      if (this.user.configuration.dashboards[index].id == dashboardId) {
        this.user.configuration.dashboards.splice(index, 1);
        break;
      }
    }
  }

  public saveDashboard(dashboard: Dashboard) {
    //Call api to add

    //Add to local data
    this.user.configuration.dashboards.push(dashboard);
  }

  public addWidget(widgetId: number, dashboardId: number) {
    //Call api to add

    //Add to local data
    this.user.configuration.dashboards.find(d => d.id == dashboardId).widgets.push(widgetId);
  }

  public removeWidget(widgetId: number, dashboardId: number) {
    //Call api to remove

    //Add to local data
    let d = this.user.configuration.dashboards.find(d => d.id == dashboardId);
    if(d != undefined){
      for (var index = 0; index < d.widgets.length; index++) {
        if(d.widgets[index] == widgetId){
          d.widgets.splice(index, 1);
        }     
      }
    }
  }
}
