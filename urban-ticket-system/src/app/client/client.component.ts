import { Component, OnInit } from '@angular/core';
import { ClientData } from './data/client-data';
import { ClientDataService } from './service/client-data.service';
import { faEdit, faLock } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditClientDataDialogComponent } from './edit-client-data-dialog/edit-client-data-dialog.component';
import { EditClientPasswordDialogComponent } from './edit-client-password-dialog/edit-client-password-dialog.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  data!: ClientData; 
  faEdit = faEdit
  faLock = faLock

  constructor(
    private clientDataService: ClientDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clientDataService.getUserData()
    .subscribe(value => {
      this.data = value;
    })
  }

  changeData() {
    const dialogRef = this.dialog.open(EditClientDataDialogComponent, {
      data: this.data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  changePassword() {
    const dialogRef = this.dialog.open(EditClientPasswordDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
