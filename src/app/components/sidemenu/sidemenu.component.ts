import { UserService } from './../../services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { WidgetLibraryService } from '../../services/widgetLibrary-service/widget-library.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  dashboards: MenuElement[];
  activeWidgets: MenuElement[];
  allWidgets: MenuElement[];

  constructor(
    private userService: UserService,
    private widgetService: WidgetLibraryService) {
    //Init properties
    this.dashboards = [];
    this.activeWidgets = [];
    this.allWidgets = [];
  }

  ngOnInit() {
    //Convert all widgets to MenuElements from WidgetLibrary
    for (var index = 0; index < this.widgetService.widgets.length; index++) {
      let element = new MenuElement(
        this.widgetService.widgets[index].id,
        false, false,
        this.widgetService.widgets[index].title);
      //Add to allWidgets
      this.allWidgets.push(element);
    }

    //Convert all widgets to MenuElements from User Configuratin
    for (var index = 0; index < this.userService.user.configuration.dashboards.length; index++) {
      let id = this.userService.user.configuration.dashboards[index].id;
      let name = this.userService.user.configuration.dashboards[index].name;
      let element = new MenuElement(id, true, true, name);
      this.dashboards.push(element);
    }
  }

  changedashBoard(dashboardId: number) {

  }

  newDashboard() {
    //TO DO
  }

  removeDashboard(dashboard) {
    //Check if dashboard exists
    if (this.dashboards.includes(dashboard)) {
      //Remove it
      for (var index = 0; index < this.dashboards.length; index++) {
        if (this.dashboards[index] == dashboard) {
          this.dashboards.splice(index, 1);
          break; // found, stop loop
        }
      }
    }
    //TO DO: Save to user configuration
  }

  //Adds widget to active list
  addWidget(widget: MenuElement) {
    //Check if its already on the list - disallow adding it more times
    if (!this.activeWidgets.includes(widget)) {
      //put it on activelist if it doesnt
      this.activeWidgets.push(widget);
      this.widgetService.spawnWidget(widget.widgetId);
      //Set widget on widget list to active
      for (var index = 0; index < this.allWidgets.length; index++) {
        if (this.allWidgets[index] == widget) {
          this.allWidgets[index].active = true;
        }
      }
    }
    //TO DO: Save to user configuration
  }

  removeWidget(widget: MenuElement) {
    //Check if widget exists
    if (this.activeWidgets.includes(widget)) {
      //Remove it
      for (var index = 0; index < this.activeWidgets.length; index++) {
        if (this.activeWidgets[index] == widget) {
          this.widgetService.removeWidget(widget.widgetId);
          this.activeWidgets.splice(index, 1);
          //Remove active
          for (var index = 0; index < this.allWidgets.length; index++) {
            if (this.allWidgets[index] == widget) {
              this.allWidgets[index].active = false;
            }
          }
          break; // found, stop loop
        }
      }
    }
    //TO DO: Save to user configuration
  }
}

class MenuElement {
  widgetId: number;
  removeable: boolean;
  active: boolean
  titel: string;

  constructor(widgetId: number, removeable: boolean, active: boolean, titel: string) {
    //Init properties
    this.widgetId = widgetId;
    this.removeable = removeable;
    this.active = active;
    this.titel = titel;
  }
}


