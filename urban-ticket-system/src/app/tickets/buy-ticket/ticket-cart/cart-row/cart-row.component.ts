import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TicketType } from 'src/app/tickets/data/ticketType';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.scss']
})
export class CartRowComponent implements OnInit {

  @Input() ticket: [TicketType,number];
  @Output() valueChangedEvent = new EventEmitter<any>();
  @Output() removeItemEvent = new EventEmitter<number>();
  faTrash = faTrash;

  constructor() { }



  ngOnInit(): void {
  }

  decreaseValue(){
    if(this.ticket[1] > 1){
      this.ticket[1] = this.ticket[1] - 1;
      this.valueChangedEventEmit();
    }
  }
  increaseValue(){
    this.ticket[1] = this.ticket[1] + 1;
    this.valueChangedEventEmit();
  }

  valueChangedEventEmit(){
    this.valueChangedEvent.emit(this.ticket);
  }
  removeItemEventEmit(){
    this.removeItemEvent.emit(this.ticket[0].id);
  }

}
