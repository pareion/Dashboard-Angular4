import { Injectable } from '@angular/core';
import { Configuration } from "../helperClasses/configuration";
import { Dashboard, DashboardType } from "../helperClasses/dashboard";
import { User } from "../helperClasses/user";

@Injectable()
export class UserService {
  user: User;

  constructor(
  ) { 
    //No login implemented yet.
    //Test login. Remove this when login is implemented.
    this.getUserData();
  }

  getUserData() {
    //if authenticated
    //Get user from server
    //Store in user variable

    //Test - Last parameter is null, so a configuration will be generated
    this.user = new User("Jeppe", "Ærenlund", "IT & Digitalisering", "Praktikant");
  }

  //TODO
  removeDashboard(dashboardId: number){
    //Call api to remove

    //Remove from local data
    let dashboard;
    for (var index = 0; index < this.user.configuration.dashboards.length; index++) {
      if(this.user.configuration.dashboards[index].id == dashboardId){
        this.user.configuration.dashboards.splice(index, 1);
        break;
      }
      
    }
  }

  saveDashboard(dashboard: Dashboard){
    //Call api to add

    //Add to local data
    this.user.configuration.dashboards.push(dashboard);
  }

  addWidget(widgetId: number, dashboardId: number){
    //Call api to add

    //Add to local data
    for (var index = 0; index < this.user.configuration.dashboards.length; index++) {
      if(this.user.configuration.dashboards[index].id == dashboardId){
        this.user.configuration.dashboards[index].widgets.push(widgetId);
        break;
      }
   
    }
  }

  removeWidget(widgetId: number, dashboardId: number){
    //Call api to remove

    //Add to local data
    let found = false;
    for (var index = 0; index < this.user.configuration.dashboards.length; index++) {
      //if done, end.
      if(found){
        break;
      }
      //Find dashboard
      if(this.user.configuration.dashboards[index].id == dashboardId){
        //find widget
        for (var index2 = 0; index2 < this.user.configuration.dashboards[index2].widgets.length; index2++) {
          if(this.user.configuration.dashboards[index].widgets[index2] == widgetId){
            this.user.configuration.dashboards[index].widgets.splice(index2, 1);
            found = true;
          }   
        }
      }     
    }
  }
}
