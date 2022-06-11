import { Component, OnInit } from '@angular/core';
import { ClientData } from './data/client-data';
import { ClientDataService } from './service/client-data.service';
import { faEdit, faLock, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditClientDataDialogComponent } from './edit-client-data-dialog/edit-client-data-dialog.component';
import { EditClientPasswordDialogComponent } from './edit-client-password-dialog/edit-client-password-dialog.component';
import { TicketCategory, TicketData, TicketType, TicketStatus } from './data/ticket-data';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoleService } from '../auth/service/role.service';

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
    public roleService: RoleService,
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
        this.clientDataService.changeUserData({name: result.name, surname: result.surname})
        .subscribe(res => {
          if(res) {
            this.data.name = result.name;
            this.data.surname = result.surname
          }
        });
    },
    (error) => {});
  }

  changePassword() {
    const dialogRef = this.dialog.open(EditClientPasswordDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.clientDataService.changePasswordData(result);
    },
    (error) => {});
  }

  updateTickets(id: number) {
    this.bolded = id;
    switch (id) {
      case 1:
        this.userTickets = this.allTickets
          .filter(t => t.status == TicketStatus.BOUGHT)
        break;
      case 2:
        this.userTickets = this.allTickets
          .filter(t => t.status == TicketStatus.VALID && moment() <= moment(t.validatedTime).add(t.type.minutesOfValidity, 'm').add(t.type.daysOfValidity, 'd'))
        break;
      case 3:
        this.userTickets = this.allTickets
          .filter(t => t.status == TicketStatus.INVALID && moment() > moment(t.validatedTime).add(t.type.minutesOfValidity, 'm').add(t.type.daysOfValidity, 'd'))
        break;
    }
  }
}
