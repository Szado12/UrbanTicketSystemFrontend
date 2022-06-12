import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientDataDialogComponent } from './edit-client-data-dialog.component';

describe('EditClientDataDialogComponent', () => {
  let component: EditClientDataDialogComponent;
  let fixture: ComponentFixture<EditClientDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
