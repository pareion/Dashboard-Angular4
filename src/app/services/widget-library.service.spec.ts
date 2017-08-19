import { TestBed, inject } from '@angular/core/testing';

import { WidgetLibraryService } from './widget-library.service';

describe('WidgetLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetLibraryService]
    });
  });

  it('should be created', inject([WidgetLibraryService], (service: WidgetLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
