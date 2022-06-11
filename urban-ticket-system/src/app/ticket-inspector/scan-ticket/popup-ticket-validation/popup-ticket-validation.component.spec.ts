import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTicketValidationComponent } from './popup-ticket-validation.component';

describe('PopupTicketValidationComponent', () => {
  let component: PopupTicketValidationComponent;
  let fixture: ComponentFixture<PopupTicketValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupTicketValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTicketValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
