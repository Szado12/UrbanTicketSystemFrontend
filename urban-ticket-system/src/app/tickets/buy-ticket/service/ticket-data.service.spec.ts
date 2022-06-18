import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { TicketDataService } from './ticket-data.service';

describe('TicketDataService', () => {
  let service: TicketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, RouterTestingModule],
      providers: [
          {provide: MatDialogRef, useValue: {}},
          {provide: MAT_DIALOG_DATA, useValue: {}},
          { provide: 'BASE_API_URL', useValue: 'https://urban-ticket-system-backend.herokuapp.com'  }
        ]		
    });
    service = TestBed.inject(TicketDataService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
