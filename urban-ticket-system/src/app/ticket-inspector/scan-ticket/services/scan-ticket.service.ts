import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostScanTicket } from '../data/post-scan-ticket';
import { ScanTicketResponse } from '../data/scan-ticket-response';

@Injectable({
  providedIn: 'root'
})
export class ScanTicketService {

  constructor(
  private readonly http: HttpClient, 
  @Inject('BASE_API_URL') private baseUrl: string) {}

  
  scanTicketUrl:string = "/ticket/check";

  scanTicket(data:PostScanTicket) : Observable<ScanTicketResponse>{
    return this.http.put<ScanTicketResponse>(this.baseUrl+this.scanTicketUrl,data);
  }
}
