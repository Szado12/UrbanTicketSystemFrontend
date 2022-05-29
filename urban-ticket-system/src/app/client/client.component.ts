import { Component, OnInit } from '@angular/core';
import { ClientData } from './data/client-data';
import { ClientDataService } from './service/client-data.service';
import { faEdit, faLock } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditClientDataDialogComponent } from './edit-client-data-dialog/edit-client-data-dialog.component';
import { EditClientPasswordDialogComponent } from './edit-client-password-dialog/edit-client-password-dialog.component';
import { TicketCategory, TicketData, TicketType } from './data/ticket-data';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  data!: ClientData; 
  faEdit = faEdit
  faLock = faLock
  userTickets: TicketData[];
  loaded: boolean = false;
  constructor(
    private clientDataService: ClientDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clientDataService.getUserData()
    .subscribe(value => {
      this.data = value;
      this.loaded = true;

      const category: TicketCategory = {
        name: 'chuj'
      };
      
      const ticketType: TicketType = {
        price: 120,
        reduced: false,
        category: category,
        minutesOfValidity: 120,
        daysOfValidity: 0
      }
      const ticket: TicketData = {
        id: 1,
        boughtTime: new Date(),
        validatedTime: new Date(),
        validatedInBus: 0,
        status: 'BOUGHT',
        type: ticketType
      
      }
      //this.userTickets = this.data.tickets;
      this.userTickets = [ticket, ticket, ticket];
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
