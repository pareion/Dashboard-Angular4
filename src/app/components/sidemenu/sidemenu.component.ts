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

    console.log("Sidemenu constructor calling")
    this.setup();
  }

  setup() {
    let activeDashboard = this.dashboardcontroller.getActiveDashboard();

    this.clearMenu();
    this.listAllDashboards();
    this.listAllWidgets();
    this.setActiveDashboard(activeDashboard);
    this.setActiveWidgets();
    this.setActiveAllWidgets();
  }

  clearMenu() {
    this.dashboards = [];
    this.activeWidgets = [];
    this.allWidgets = [];
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
    //Sets the active dashboard from controller to active on sidemenu
    this.dashboards.forEach(id => {
      if (id.id == this.dashboardcontroller.getActiveDashboard().id) {
        id.active = true;
        this.activeDashboard = id.id;
      }
    });
  }

  setActiveWidgets() {
    //Sets the active widgets on current dashboard to active
    let widgets = this.dashboardcontroller.getActiveDashboard().widgets;
    if (widgets) {
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
    //Switch dashboard only if the active is not already active
    if (this.dashboardcontroller.getActiveDashboard().id != dashboardElement.id) {
      //Set the current dashboard to not active
      this.dashboards.find(d => d.id == this.activeDashboard).active = false;
      this.dashboardcontroller.changeDashboard(dashboardElement.id);
      //Clear the whole sidemenu and load in again.
      this.setup();
    }
  }

  //To Do - fix
  removeDashboard(dashboardElement: MenuElement) {
    this.changeDashboard(new MenuElement(2, false, false, ''));  ////TEST - delete

    //this.dashboardcontroller.removeDashboard(dashboardElement.id); <-- uncomment
    //Clear the whole sidemenu and load in again.
    //this.setup();
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


