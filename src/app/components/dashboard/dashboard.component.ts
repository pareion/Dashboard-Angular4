import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DashboardType } from "../../services/user-service/user.service";
import { WidgetItem } from './../../services/widgetlibrary-service/widget-item';
import { WidgetComponent } from './../../services/widgetlibrary-service/widget.component';
import { WidgetHostDirective } from './../../directives/widget-host.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;
  activeWidgets: number[]; //Contains ID's of Widgets.

  id: number;
  type: DashboardType;
  title: string;
  contentHeader: boolean;
  numCols: number; //Not implemented in html yet. Right now it's always 2 cols with 7 and 5 in bootstrap size.

  constructor(id: number, type: DashboardType, title: string,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.activeWidgets = [];

    this.setContentVariables();
  }

  private setContentVariables() {
    switch (this.type) {
      case DashboardType.Standard1Col:
        this.contentHeader = false;
        this.numCols = 1;
        break;
      case DashboardType.Standard2Col:
        this.contentHeader = false;
        this.numCols = 2;
        break;
      case DashboardType.TopWidgets1Col:
        this.contentHeader = true;
        this.numCols = 1;
        break;
      case DashboardType.TopWidgets2Col:
        this.contentHeader = true;
        this.numCols = 2;
        break;
      default:
        break;
    }
  }

  public spawnWidget(widget: WidgetItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);
    let viewContainerRef = this.widgetHost.viewContainerRef;

    //Create component into DOM and set values.
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<WidgetComponent>componentRef.instance).id = widget.id;
    (<WidgetComponent>componentRef.instance).title = widget.title;
  }

  //Subscriber method for clearing the standard widget into DOM.
  public removeWidget(widget: WidgetItem, index: number) {
      //Resolve the component.
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.component);
      let viewContainerRef = this.widgetHost.viewContainerRef;
      //Remove it from the widgetarea by index.
      viewContainerRef.remove(index)
  }
}
