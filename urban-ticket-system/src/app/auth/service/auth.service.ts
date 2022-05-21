import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ClientLoginData } from '../data/client-login-data';
import { ClientRegisterData } from '../data/client-register-data';
import { InspectorLoginData } from '../data/inspector-login-data';
import { FacebookLoginData } from '../data/facebook-login-data';

const registerUrl = '/register';
const loginUrl = '/login';
const facebookLoginUrl = '/facebook/login';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private readonly http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) {}

	clientLogin(data: ClientLoginData): Observable<boolean> {
		//return of(true);
		return this.http.post<boolean>(this.baseUrl + loginUrl, data);
	}

	facebookLogin(data: FacebookLoginData): Observable<Object> {
		//return of(true);
		return this.http.post(this.baseUrl + facebookLoginUrl, data);
	}

	clientRegister(data: ClientRegisterData): Observable<boolean> {
		//return of(true);
		return this.http.post<boolean>(this.baseUrl + registerUrl, data);
	}

	inspectorLogin(data: InspectorLoginData): Observable<boolean> {
		//return of(true);
		return this.http.post<boolean>(this.baseUrl + loginUrl, data);
	}
}
