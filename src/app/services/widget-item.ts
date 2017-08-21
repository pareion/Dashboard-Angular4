import { WidgetComponent } from './widget.component';
import { Type } from '@angular/core';

export class WidgetItem {
    constructor(
        public component: Type<WidgetComponent>, 
        public id: number, 
        public title: string) { }
}