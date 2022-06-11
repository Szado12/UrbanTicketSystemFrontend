import { TestBed } from '@angular/core/testing';

import { InspectorDataService } from './inspector-data.service';

describe('InspectorDataService', () => {
  let service: InspectorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
