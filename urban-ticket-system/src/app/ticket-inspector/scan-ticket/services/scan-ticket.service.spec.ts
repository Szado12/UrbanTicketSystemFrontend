import { TestBed } from '@angular/core/testing';

import { ScanTicketService } from './scan-ticket.service';

describe('ScanTicketService', () => {
  let service: ScanTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScanTicketService);
  });

});
