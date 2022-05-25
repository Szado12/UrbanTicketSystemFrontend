import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClientData } from '../data/client-data';

const profileUrl = '/profile';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(
    private readonly http: HttpClient, 
		@Inject('BASE_API_URL') private baseUrl: string) { }

  getUserData(): Observable<ClientData> {
		return this.http.get<ClientData>(this.baseUrl + profileUrl);
    // return of({name: 'Halskza', surname:'ciesielsak', tickets: [{name:'1'}, {name:'2'}]})
  }
}
