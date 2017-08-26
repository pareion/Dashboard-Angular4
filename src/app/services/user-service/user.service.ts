import { Injectable } from '@angular/core';
import { Configuration } from "../helperClasses/configuration";
import { Dashboard, DashboardType } from "../helperClasses/dashboard";
import { User } from "../helperClasses/user";

@Injectable()
export class UserService {
  user: User;

  constructor() { }

  getUserData() {
    //if authenticated
    //Get user from server
    //Store in user variable

    //Test - Last parameter is null, so a configuration will be generated
    this.user = new User("Jeppe", "Ærenlund", "IT & Digitalisering", "Praktikant");
  }

  //activewidgets is the ID array og widgets
  saveActiveWidgetList(activeWidgets: number[], dashboardId: number) {
    for (var index = 0; index < this.user.configuration.dashboards.length; index++) {
      if(this.user.configuration.dashboards[index].id == dashboardId){
        this.user.configuration.dashboards[index].widgets = activeWidgets;
        break;
      }   
    }
  }

  //TODO
  removeDashboard(dashboardId: number){

  }

  saveDashboard(){

  }

  addWidget(id: number, id2: number){

  }

  removeWidget(id: number, id2: number){

  }
}
