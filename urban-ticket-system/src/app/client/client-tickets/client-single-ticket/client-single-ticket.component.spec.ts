import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClientSingleTicketComponent } from './client-single-ticket.component';

describe('ClientSingleTicketComponent', () => {
  let component: ClientSingleTicketComponent;
  let fixture: ComponentFixture<ClientSingleTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSingleTicketComponent ],
      imports: [HttpClientTestingModule, MatDialogModule], 
      providers: [
      {provide: MatDialogRef, useValue: {}},
      {provide: MAT_DIALOG_DATA, useValue: {}},
      { provide: 'BASE_API_URL', useValue: 'https://urban-ticket-system-backend.herokuapp.com'  }
    ]	
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSingleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
