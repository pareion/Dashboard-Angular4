import { WidgetComponent } from './widget.component';
import { Type } from '@angular/core';

//WidgetItem. Container for holding values when they need to be injected into DOM.
export class WidgetItem {
    constructor(
        public component: Type<WidgetComponent>, 
        public id: number, 
        public title: string) { }
}