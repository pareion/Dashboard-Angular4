import { Injectable } from '@angular/core';

@Injectable()
export class WidgetLibraryService {
  widgets: IWidget[];
  widgetsToBeSpawned: IWidget[];
  public spawn: { (): void; }; //<--- acts like a delegate that will fire event

  constructor() {
    //init the array
    this.widgets = [];
    this.widgetsToBeSpawned = [];
    //Register all widgets here
    this.widgets.push(new TestWidget());
    this.widgets.push(new Test2Widget());
    this.widgets.push(new Test3Widget());
    //--------> Add more here

    //Sort array based on title name
    this.widgets.sort(function (a, b) {
      var nameA = a.title.toUpperCase();
      var nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      //same names
      return 0;
    });
  }

  //Life cycle hook
  ngOnInit() { }

  spawnWidget(id: number) {
    //Find widget - todo: ID
    for (var index = 0; index < this.widgets.length; index++) {
      if (this.widgets[index].id == id) {
        this.widgetsToBeSpawned.push(this.widgets[index]);
        this.spawn();
        break;
      }
    }
  }
}

//Interface for all widgets to implement
interface IWidget {
  id: number;
  title: string;
  spawn(): string;
}

interface addWidget {
  (message: string): void;
}

//Implementations ---------------->
class TestWidget implements IWidget {
  id: number;
  title: string;

  constructor() {
    this.id = 1;
    this.title = "Test Boks 1";
  }
  spawn(): string {
    return "<p> hello world From 1 </p>";
  }
}

class Test2Widget implements IWidget {
  id: number;
  title: string;

  constructor() {
    this.id = 2;
    this.title = "Test Boks 2";
  }
  spawn(): string {
    return "<p> hello world 2</p>";
  }
}

class Test3Widget implements IWidget {
  id: number;
  title: string;

  constructor() {
    this.id = 3;
    this.title = "Test Boks 3";
  }
  spawn(): string {
    return "<p> hello world 3</p>";
  }
}