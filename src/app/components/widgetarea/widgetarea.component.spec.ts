import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetareaComponent } from './widgetarea.component';

describe('WidgetareaComponent', () => {
  let component: WidgetareaComponent;
  let fixture: ComponentFixture<WidgetareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
