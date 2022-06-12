import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInspectorDataDialogComponent } from './edit-inspector-data-dialog.component';

describe('EditInspectorDataDialogComponent', () => {
  let component: EditInspectorDataDialogComponent;
  let fixture: ComponentFixture<EditInspectorDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInspectorDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInspectorDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
