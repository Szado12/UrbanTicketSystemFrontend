import { Component, Input, OnInit } from '@angular/core';
import { TicketData } from '../data/ticket-data';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client-tickets',
  templateUrl: './client-tickets.component.html',
  styleUrls: ['./client-tickets.component.scss']
})
export class ClientTicketsComponent implements OnInit {
  constructor(public dialog: MatDialog){}
  @Input() userTickets!: TicketData[];

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TicketDetailsComponent, {
      width: '250px'
    });
  }
}
