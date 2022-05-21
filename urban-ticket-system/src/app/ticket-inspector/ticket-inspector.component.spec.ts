import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInspectorComponent } from './ticket-inspector.component';

describe('TicketInspectorComponent', () => {
  let component: TicketInspectorComponent;
  let fixture: ComponentFixture<TicketInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketInspectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
