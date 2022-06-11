import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-inspector-password-dialog',
  templateUrl: './edit-inspector-password-dialog.component.html',
  styleUrls: ['./edit-inspector-password-dialog.component.scss']
})
export class EditInspectorPasswordDialogComponent {
  differentPassword = false;
  constructor(public dialogRef: MatDialogRef<EditInspectorPasswordDialogComponent>) {}

	dataForm = new FormGroup({
		password: new FormControl('', Validators.compose([ Validators.required, Validators.maxLength(50) ])),
		repeatPassword: new FormControl('', Validators.compose([ Validators.required, Validators.maxLength(50) ]))
  });

  checkPasswords() {
    this.differentPassword = false;
    this.differentPassword = this.dataForm.value.password != this.dataForm.value.repeatPassword;
    
    if(!this.differentPassword)
      this.dialogRef.close(this.dataForm.value.password);
  }
}
