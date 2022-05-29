import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSingleTicketComponent } from './client-single-ticket.component';

describe('ClientSingleTicketComponent', () => {
  let component: ClientSingleTicketComponent;
  let fixture: ComponentFixture<ClientSingleTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSingleTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSingleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
