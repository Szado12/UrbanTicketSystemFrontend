import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PopupTicketValidationComponent } from './popup-ticket-validation.component';

describe('PopupTicketValidationComponent', () => {
  let component: PopupTicketValidationComponent;
  let fixture: ComponentFixture<PopupTicketValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupTicketValidationComponent ],
      imports: [HttpClientTestingModule, MatDialogModule], 
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        { provide: 'BASE_API_URL', useValue: 'https://urban-ticket-system-backend.herokuapp.com'  }]		

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
