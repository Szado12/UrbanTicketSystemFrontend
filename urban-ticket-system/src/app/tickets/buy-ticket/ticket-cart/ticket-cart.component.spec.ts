import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCartComponent } from './ticket-cart.component';

describe('TicketCartComponent', () => {
  let component: TicketCartComponent;
  let fixture: ComponentFixture<TicketCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
