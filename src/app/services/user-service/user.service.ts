import { Injectable } from '@angular/core';
import { Configuration } from "../helperClasses/configuration";
import { Dashboard, DashboardType } from "../helperClasses/dashboard";

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

export class User {
  first_name: string;
  last_name: string;
  department: string;
  occupation: string;
  configuration: Configuration;

  constructor(
    firstname: string, lastname: string,
    department: string, occupation: string,
    configuration: Configuration = null) {
    this.first_name = firstname; this.last_name = lastname;
    this.department = department; this.occupation = occupation;
    if (configuration != null) {
      this.configuration = configuration;
    }
    else {
      this.configuration = new Configuration()
      this.configuration.dashboards.push(new Dashboard(1, "Nyt dashboard", DashboardType.Standard1Col));
    }
  }
}
