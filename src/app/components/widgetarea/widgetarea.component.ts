import { WidgetItem } from './../../services/widgetlibrary-service/widget-item';
import { WidgetComponent } from './../../services/widgetLibrary-service/widget.component';
import { WidgetHostDirective } from './../../directives/widget-host.directive';
import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy  } from '@angular/core';
import { WidgetLibraryService } from '../../services/widgetLibrary-service/widget-library.service';

@Component({
  selector: 'app-widgetarea',
  templateUrl: './widgetarea.component.html',
  styleUrls: ['./widgetarea.component.css']
})
export class WidgetareaComponent {
  @ViewChild(WidgetHostDirective) widgetHost: WidgetHostDirective;

  constructor(
    private widgetService: WidgetLibraryService, 
    private componentFactoryResolver: ComponentFactoryResolver) {
    
    this.widgetService.spawn = () => this.spawn();
    this.widgetService.remove = () => this.remove();
  }

   //TODO: Add comments
  spawn() {
    for (var index = 0; index < this.widgetService.widgetsToBeSpawned.length; index++) {
      
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widgetService.widgetsToBeSpawned[index].component);

    let viewContainerRef = this.widgetHost.viewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<WidgetComponent>componentRef.instance).id = this.widgetService.widgetsToBeSpawned[index].id;
    (<WidgetComponent>componentRef.instance).title = this.widgetService.widgetsToBeSpawned[index].title;

    this.widgetService.widgetsToBeSpawned.splice(index, 1);
    }
  }

  //TODO: Add comments
  remove() {
    for (var index = 0; index < this.widgetService.widgetsToBeRemoved.length; index++) {
      //Find widget
      var elementId = this.widgetService.widgetsToBeRemoved[index].id.toString();
      var widgetRemove = document.getElementById(elementId);
      //remove from document
      widgetRemove.remove();
      //Done - remove the widget from the array
      this.widgetService.widgetsToBeRemoved.splice(index, 1);
    }
  }
}
