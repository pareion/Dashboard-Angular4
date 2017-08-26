import { Dashboard } from "./dashboard";

{ Dashboard }

export class Configuration {
    dashboards: Dashboard[];
  
    constructor(dashboards: Dashboard[] = null) {
      if(this.dashboards == null){
        this.dashboards = [];
      }
      else{
        this.dashboards = dashboards;
      }   
    }
  }