import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ClientLoginData } from '../data/client-login-data';
import { ClientRegisterData } from '../data/client-register-data';
import { InspectorLoginData } from '../data/inspector-login-data';

const authApiPrefix = '/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  clientLogin(data: ClientLoginData): Observable<boolean> {
    //return of(true);
    return this.http.post<boolean>(authApiPrefix, data);
  }

  clientRegister(data: ClientRegisterData): Observable<boolean> {
    //return of(true);
    return this.http.post<boolean>(authApiPrefix, data);
  }

  inspectorLogin(data: InspectorLoginData): Observable<boolean> {
    //return of(true);
    return this.http.post<boolean>(authApiPrefix, data);
  }
}
