import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientPasswordDialogComponent } from './edit-client-password-dialog.component';

describe('EditClientPasswordDialogComponent', () => {
  let component: EditClientPasswordDialogComponent;
  let fixture: ComponentFixture<EditClientPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientPasswordDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
