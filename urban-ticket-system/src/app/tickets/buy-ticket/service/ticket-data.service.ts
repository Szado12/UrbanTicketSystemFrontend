import { Injectable, Inject } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketCategory } from '../../data/ticketCategory';
import { TicketType } from '../../data/ticketType';
import { PostBuyMultipleTickets } from '../../data/post-multiple-tickets';

const getTickerCategoriesUrl = '/ticketcategories';
const getTicketTypesUrl = '/tickettypes';
const postTicketsToBuy = '/tickets';
@Injectable({
  providedIn: 'root',
})
export class TicketDataService {
  constructor(
    private readonly http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}

  getTicketCategories(): Observable<TicketCategory[]> {
    return this.http.get<TicketCategory[]>(
      this.baseUrl + getTickerCategoriesUrl
    );
  }
  getTicketTypes():Observable<TicketType[]>{
    return this.http.get<TicketType[]>(this.baseUrl + getTicketTypesUrl);
  }

  postTicketsToBuy(ticketsToBuy:PostBuyMultipleTickets){
    return this.http.post<number>(this.baseUrl + postTicketsToBuy, ticketsToBuy)
  }
}
