import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClientData } from '../data/client-data';
import { ClientNameData } from '../data/client-name-data';

const profileUrl = '/profile';
const changeDataUrl = '/change-data';
const changePasswordUrl = '/change-password';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(
    private readonly http: HttpClient, 
		@Inject('BASE_API_URL') private baseUrl: string) { }

  getUserData(): Observable<ClientData> {
		return this.http.get<ClientData>(this.baseUrl + profileUrl);
  }

  changeUserData(data: ClientNameData): Observable<boolean> {
		return this.http.put<boolean>(this.baseUrl + changeDataUrl, data);
  }

  changePasswordData(password: string): Observable<boolean> {
		return this.http.put<boolean>(this.baseUrl + changePasswordUrl, password);
  }
}