import { TestBed } from '@angular/core/testing';

import { ClientDataService } from './client-data.service';

describe('ClientDataService', () => {
  let service: ClientDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDataService);
  });

});
