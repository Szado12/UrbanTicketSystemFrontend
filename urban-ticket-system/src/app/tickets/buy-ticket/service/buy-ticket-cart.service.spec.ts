import { TestBed } from '@angular/core/testing';
import { TicketCategory } from '../../data/ticketCategory';
import { TicketType } from '../../data/ticketType';

import { BuyTicketCartService } from './buy-ticket-cart.service';

describe('BuyTicketCartService', () => {
  let service: BuyTicketCartService;
  let category: TicketCategory ={
    id: 0,
    name: 'categoryA'
  }
  let ticketTypeA:TicketType = {
    id: 1,
    displayName:"",
    price: 20,
    reduced: false,
    category: category,
    minutesOfValidity: 0,
    daysOfValidity: 0
  }
  let ticketTypeB:TicketType = {
    id: 2,
    displayName:"",
    price: 30,
    reduced: true,
    category: category,
    minutesOfValidity: 30,
    daysOfValidity: 0
  }


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyTicketCartService);
    service.clearAll();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should clearAll', () => {
		expect(service.getListOfTicketsInCart().size).toBe(0);
	});

  it('should add one ticket', () => {
    service.addTicket(ticketTypeA,1)
		expect(service.getListOfTicketsInCart().size).toBe(1);
		expect(service.getListOfTicketsInCart().has(ticketTypeA.id)).toBeTrue;
	});

  it('should add two tickets', () => {
    service.addTicket(ticketTypeA,1)
    service.addTicket(ticketTypeB,1)
		expect(service.getListOfTicketsInCart().size).toBe(2);
		expect(service.getListOfTicketsInCart().has(ticketTypeA.id)).toBeTrue;
		expect(service.getListOfTicketsInCart().has(ticketTypeB.id)).toBeTrue;
	});

  it('should add two tickets of same type', () => {
    service.addTicket(ticketTypeA,1)
    service.addTicket(ticketTypeA,1)
		expect(service.getListOfTicketsInCart().size).toBe(1);
		expect(service.getListOfTicketsInCart().has(ticketTypeA.id)).toBeTrue;
		expect(service.getListOfTicketsInCart().has(ticketTypeB.id)).toBeFalse;
	});

});

