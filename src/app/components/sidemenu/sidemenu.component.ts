import { Component } from '@angular/core';
import { WidgetLibraryService } from '../../services/widgetLibrary-service/widget-library.service';
import { DashboardcontrollerService } from "../../services/dashboardcontroller-service/dashboardcontroller.service";
import { MenuElement } from "../../services/helperClasses/MenuElement";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})

export class SidemenuComponent{
  dashboards: MenuElement[];
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

  setup()
  {
    this.clearMenu();
    this.listAllDashboards();
    this.listAllWidgets();
    this.setActiveDashboard();
    this.setActiveWidgets();
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
    this.dashboardcontroller.getDashboards().forEach(dashboard => {
      let menuElement = new MenuElement(
        dashboard.id, false, false, dashboard.name
      );
      this.dashboards.push(menuElement);
    });
  }

  setActiveDashboard() {
    this.dashboards.forEach(id => {
      if (id.id == this.dashboardcontroller.getActiveDashboard().id) {
        id.active = true;
      }
    });
  }

  setActiveWidgets(){
    this.dashboardcontroller.getActiveDashboard().widgets.forEach(widgetId =>{
      let widget = this.widgetService.getWidget(widgetId);
      let menuElement = new MenuElement(
        widget.id, true, true, widget.title);
        this.activeWidgets.push(menuElement);
    })
  }
}


