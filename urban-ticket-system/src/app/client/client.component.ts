import { Component, OnInit } from '@angular/core';
import { ClientData } from './data/client-data';
import { ClientDataService } from './service/client-data.service';
import { faEdit, faLock, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditClientDataDialogComponent } from './edit-client-data-dialog/edit-client-data-dialog.component';
import { EditClientPasswordDialogComponent } from './edit-client-password-dialog/edit-client-password-dialog.component';
import { TicketCategory, TicketData, TicketType } from './data/ticket-data';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  data!: ClientData; 
  faEdit = faEdit
  faLock = faLock

  allTickets: TicketData[];
  userTickets: TicketData[];
  loaded: boolean = false;

  bolded = 1;

  constructor(
    private clientDataService: ClientDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clientDataService.getUserData()
      .subscribe(value => {
        console.log(value);
        this.data = value;
        this.loaded = true;
        this.allTickets = this.data.tickets;
        this.updateTickets(1);
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

  updateTickets(id: number) {
    this.bolded = id;
    switch (id) {
      case 1:
        this.userTickets = this.allTickets
          .filter(t => t.validatedInBus == 0)
        break;
      case 2:
        this.userTickets = this.allTickets
          .filter(t => t.validatedInBus == 1 && moment() <= moment(t.validatedTime).add(t.type.minutesOfValidity, 'm').add(t.type.daysOfValidity, 'd'))
        break;
      case 3:
        this.userTickets = this.allTickets
          .filter(t => t.validatedInBus == 1 && moment() > moment(t.validatedTime).add(t.type.minutesOfValidity, 'm').add(t.type.daysOfValidity, 'd'))
        break;
    }
  }
}
