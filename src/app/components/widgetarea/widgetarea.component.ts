import { element } from 'protractor';
import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy  } from '@angular/core';
import { WidgetItem } from './../../services/widgetlibrary-service/widget-item';
import { WidgetComponent } from './../../services/widgetLibrary-service/widget.component';
import { WidgetHostDirective } from './../../directives/widget-host.directive';
import { WidgetLibraryService } from '../../services/widgetLibrary-service/widget-library.service';

@Component({
  selector: 'app-widgetarea',
  templateUrl: './widgetarea.component.html',
  styleUrls: ['./widgetarea.component.css']
})
export class WidgetareaComponent {
  @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;
  activeWidgets: number[]; //Contains ID's of Widgets

  constructor(
    private widgetService: WidgetLibraryService, 
    private componentFactoryResolver: ComponentFactoryResolver) {
    
    this.activeWidgets = [];
    this.widgetService.spawn = () => this.spawnWidget(); //Subscribe to event
    this.widgetService.remove = () => this.removeWidget(); //Subscribe to event
  }

  //Subscriber method for spawning the standard widget into DOM.
  spawnWidget() {
    //loop through the array of widgets to be spawned and declare variables for what and where to put component.
    for (var index = 0; index < this.widgetService.widgetsToBeSpawned.length; index++) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widgetService.widgetsToBeSpawned[index].component);
    let viewContainerRef = this.widgetHost.viewContainerRef;

    //Create component into DOM and set values.
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<WidgetComponent>componentRef.instance).id = this.widgetService.widgetsToBeSpawned[index].id;
    (<WidgetComponent>componentRef.instance).title = this.widgetService.widgetsToBeSpawned[index].title;

    //Add to activewidgets list
    this.activeWidgets.push(this.widgetService.widgetsToBeSpawned[index].id);
    //Done - Remove from list.
    this.widgetService.widgetsToBeSpawned.splice(index, 1);
    }
  }

  //To do: Comments
  removeWidget() {
    for (var index = 0; index < this.widgetService.widgetsToBeRemoved.length; index++) {
      
      //Find widget index on active array list
      let activeWidgetIndex: number;
      for (var index2 = 0; index2 < this.activeWidgets.length; index2++) {
        if(this.activeWidgets[index2] == this.widgetService.widgetsToBeRemoved[index].id){
          activeWidgetIndex = index2;
        }  
      }

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widgetService.widgetsToBeRemoved[index].component);
      let viewContainerRef = this.widgetHost.viewContainerRef;
      viewContainerRef.remove(activeWidgetIndex);
      
      //Remove from list
      this.activeWidgets.splice(activeWidgetIndex, 1);
      //Done - remove the widget from the array
      this.widgetService.widgetsToBeRemoved.splice(index, 1);
    }
  }
}

      //Find widget
      //var elementId = this.widgetService.widgetsToBeRemoved[index].id.toString();
      //var widgetRemove = document.getElementById(elementId);
      //remove from document
      //widgetRemove.remove();