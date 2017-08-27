import { Component } from '@angular/core';
import { WidgetLibraryService } from '../../services/widgetLibrary-service/widget-library.service';
import { DashboardcontrollerService } from "../../services/dashboardcontroller-service/dashboardcontroller.service";
import { MenuElement } from "../../services/helperClasses/MenuElement";
import { Dashboard } from "../../services/helperClasses/dashboard";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})

export class SidemenuComponent {
  dashboards: MenuElement[];
  activeDashboard: number; //Id
  activeWidgets: MenuElement[];
  allWidgets: MenuElement[];

  constructor(
    private dashboardcontroller: DashboardcontrollerService,
    private widgetService: WidgetLibraryService) {
    //Init properties
    this.dashboards = [];
    this.activeWidgets = [];
    this.allWidgets = [];

    this.setup();
  }

  setup() {
    let activeDashboard = this.dashboardcontroller.getActiveDashboard();
    this.clearMenu();
    this.listAllDashboards();
    this.listAllWidgets();
    if (activeDashboard) {
      this.setActiveDashboard(activeDashboard);
      this.setActiveWidgets(activeDashboard);
      this.setActiveAllWidgets();
    }
   
  }

  clearMenu() {
    this.dashboards.length = 0;
    this.activeWidgets.length = 0;
    this.allWidgets.length = 0;
  }

  listAllWidgets() {
    //Convert all widgets to MenuElements from WidgetLibrary
    for (var index = 0; index < this.widgetService.widgets.length; index++) {
      let element = new MenuElement(
        this.widgetService.widgets[index].id,
        false, false,
        this.widgetService.widgets[index].title);
      //Add to allWidgets
      this.allWidgets.push(element);
    }
  }

  listAllDashboards() {
    //Convert all dashboards from controller to MenuElements
    this.dashboardcontroller.getDashboards().forEach(dashboard => {
      let menuElement = new MenuElement(
        dashboard.id, true, false, dashboard.name
      );
      this.dashboards.push(menuElement);
    });
  }

  setActiveDashboard(activeDashboard: Dashboard) {
    this.activeDashboard = activeDashboard.id;
    let dashboard = this.dashboards.find(d => d.id == this.activeDashboard);
    if (dashboard != undefined) {
      dashboard.active = true;
    }
  }

  setActiveWidgets(activeDashboard: Dashboard) {
    //Sets the active widgets on current dashboard to active
    let widgets = activeDashboard.widgets;
    if (widgets.length > 0) {
      widgets.forEach(widgetId => {
        let widget = this.widgetService.getWidgetbyId(widgetId);
        let menuElement = new MenuElement(
          widget.id, true, true, widget.title);
        this.activeWidgets.push(menuElement);
      })
    }
  }

  setActiveAllWidgets() { //Eyes :)
    for (var index = 0; index < this.allWidgets.length; index++) {
      if (this.activeWidgets.find(w => w.id == this.allWidgets[index].id)) {
        this.allWidgets[index].active = true;
      }
    }
  }

  changeDashboard(dashboardElement: MenuElement) {
    if (dashboardElement != null) {
      //Switch dashboard only if the active is not already active
      if (this.activeDashboard != dashboardElement.id) {
        //No more dashboards on list
        if (this.dashboards.length == 0) {
        } else {
          //Set the current dashboard to not active
          this.dashboards.find(d => d.id == this.activeDashboard).active = false;
          this.dashboardcontroller.changeDashboard(dashboardElement.id);
        }
      }
    }
    //Clear the whole sidemenu and load in again.
    this.setup();
  }

  //To Do - fix
  removeDashboard(dashboardElement: MenuElement) {
    //case of removing current
    if (this.activeDashboard == dashboardElement.id) {
      //if other dashboard, switch to next one
      if (this.dashboards.length != 1) {
        let d = this.dashboards.find(d => d.id != this.activeDashboard);
        this.dashboardcontroller.removeDashboard(dashboardElement.id);
        this.changeDashboard(d);
      } else {
        this.dashboardcontroller.removeDashboard(dashboardElement.id);
        this.changeDashboard(null)
        this.setup();
      }
    } else {
      this.dashboardcontroller.removeDashboard(dashboardElement.id);
    }
  }

  //Adds widget to active list
  addWidget(widget: MenuElement) {
    //If no active dashboard
    if (!this.dashboardcontroller.getActiveDashboard()) {
      return;
    }

    //Check if its already on the list - disallow adding it more times
    if (!this.activeWidgets.find(w => w.id == widget.id)) {
      //put it on activelist if it doesnt
      this.dashboardcontroller.addWidget(widget.id);
      this.setup();
    }
  }

  removeWidget(widget: MenuElement) {
    //If no active dashboard
    if (!this.dashboardcontroller.getActiveDashboard()) {
      return;
    }

    //Check if widget exists
    if (this.activeWidgets.find(w => w.id == widget.id)) {
      //remove it
      this.dashboardcontroller.removeWidget(widget.id);
      this.setup();
    }
  }
}


