import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInspectorPasswordDialogComponent } from './edit-inspector-password-dialog.component';

describe('EditInspectorPasswordDialogComponent', () => {
  let component: EditInspectorPasswordDialogComponent;
  let fixture: ComponentFixture<EditInspectorPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInspectorPasswordDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInspectorPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
