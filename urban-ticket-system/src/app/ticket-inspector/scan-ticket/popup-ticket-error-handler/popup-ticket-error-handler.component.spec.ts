import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTicketErrorHandlerComponent } from './popup-ticket-error-handler.component';

describe('PopupTicketErrorHandlerComponent', () => {
  let component: PopupTicketErrorHandlerComponent;
  let fixture: ComponentFixture<PopupTicketErrorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupTicketErrorHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTicketErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
