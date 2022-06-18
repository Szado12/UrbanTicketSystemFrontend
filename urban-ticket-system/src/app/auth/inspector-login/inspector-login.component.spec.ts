import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { InspectorLoginComponent } from './inspector-login.component';

describe('InspectorLoginComponent', () => {
  let component: InspectorLoginComponent;
  let fixture: ComponentFixture<InspectorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorLoginComponent ],
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
    fixture = TestBed.createComponent(InspectorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
