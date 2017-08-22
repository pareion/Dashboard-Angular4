import { Directive, ViewContainerRef } from '@angular/core';

//Directive for spawning the standard widget
@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
   }
}
