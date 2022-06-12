import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HashingService } from 'src/app/auth/service/hashing.service';
import { TicketInspectorData } from '../data/ticket-inspector-data';

const profileUrl = '/profile';
const changeDataUrl = '/profile/data';
const changePasswordUrl = '/profile/password';

@Injectable({
  providedIn: 'root'
})
export class InspectorDataService {

  constructor(
    private readonly http: HttpClient, 
    private readonly hashingService: HashingService,
		@Inject('BASE_API_URL') private baseUrl: string) { }

  getUserData(): Observable<TicketInspectorData> {
		return this.http.get<TicketInspectorData>(this.baseUrl + profileUrl);
  }

  changeUserData(data: TicketInspectorData): Observable<boolean> {
		return this.http.put<boolean>(this.baseUrl + changeDataUrl, data);
  }

  changePasswordData(password: string): Observable<boolean> {
    var data = {password: this.hashingService.hashString(password)};
		return this.http.put<boolean>(this.baseUrl + changePasswordUrl, data);
  }
}
