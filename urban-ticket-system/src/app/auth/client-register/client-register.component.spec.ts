import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { ClientRegisterComponent } from './client-register.component';

describe('ClientRegisterComponent', () => {
  let component: ClientRegisterComponent;
  let fixture: ComponentFixture<ClientRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRegisterComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, RouterTestingModule], 
      providers: [
      {provide: MatDialogRef, useValue: {}},
      {provide: MAT_DIALOG_DATA, useValue: {}},
      { provide: 'BASE_API_URL', useValue: 'https://urban-ticket-system-backend.herokuapp.com'  }
    ]	
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
