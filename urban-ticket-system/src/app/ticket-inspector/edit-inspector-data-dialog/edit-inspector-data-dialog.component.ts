import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketInspectorData } from '../data/ticket-inspector-data';

@Component({
  selector: 'app-edit-inspector-data-dialog',
  templateUrl: './edit-inspector-data-dialog.component.html',
  styleUrls: ['./edit-inspector-data-dialog.component.scss']
})
export class EditInspectorDataDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TicketInspectorData) {}

	dataForm = new FormGroup({
		name: new FormControl(this.data.name),
		surname: new FormControl(this.data.surname)
  });
  
  ngOnInit(): void {
  }

}
