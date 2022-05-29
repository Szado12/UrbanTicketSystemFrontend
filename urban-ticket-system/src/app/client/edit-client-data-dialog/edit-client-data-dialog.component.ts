import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/data/user';
import { ClientData } from '../data/client-data';

@Component({
  selector: 'app-edit-client-data-dialog',
  templateUrl: './edit-client-data-dialog.component.html',
  styleUrls: ['./edit-client-data-dialog.component.scss']
})
export class EditClientDataDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ClientData) {}

	dataForm = new FormGroup({
		name: new FormControl(this.data.name),
		surname: new FormControl(this.data.surname)
  });

  ngOnInit(): void {
  }

}
