import { Component, OnInit } from '@angular/core';
import { TicketInspectorData } from './data/ticket-inspector-data';
import { InspectorDataService } from './service/inspector-data.service';
import { faEdit, faLock, faSpinner, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { EditInspectorDataDialogComponent } from './edit-inspector-data-dialog/edit-inspector-data-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditInspectorPasswordDialogComponent } from './edit-inspector-password-dialog/edit-inspector-password-dialog.component';

@Component({
  selector: 'app-ticket-inspector',
  templateUrl: './ticket-inspector.component.html',
  styleUrls: ['./ticket-inspector.component.scss']
})
export class TicketInspectorComponent implements OnInit {
  data!: TicketInspectorData; 
  faEdit = faEdit
  faLock = faLock
  faSpinner = faSpinner
  loaded: boolean = false;

  constructor(
    private inspectorDataService: InspectorDataService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.inspectorDataService.getUserData()
      .subscribe(value => {
        this.data = value;
        this.loaded = true;
      })
  }

  changeData() {
    const dialogRef = this.dialog.open(EditInspectorDataDialogComponent, {
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result: TicketInspectorData) => {
      this.inspectorDataService.changeUserData(result)
      .subscribe(res => {
        if(res) {
          this.data.name = result.name;
          this.data.surname = result.surname
        }
      })
    });
  }

  changePassword() {
    const dialogRef = this.dialog.open(EditInspectorPasswordDialogComponent, {
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      this.inspectorDataService.changePasswordData(result).subscribe()
    });
  }
}
