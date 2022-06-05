import { Component, Input,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketType } from 'src/app/tickets/data/ticketType';

@Component({
  selector: 'app-add-to-cart-popup',
  templateUrl: './add-to-cart-popup.component.html',
  styleUrls: ['./add-to-cart-popup.component.scss']
})
export class AddToCartPopupComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: TicketType ) {
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}
