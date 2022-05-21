import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ClientRegisterData } from '../data/client-register-data';
import { LoginRequestData } from '../data/login-request-data';
import { HashingService } from './hashing.service';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
import { ResponseLoginData } from '../data/login-response-data';

const registerUrl = '/register';
const loginUrl = '/login';
const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';

const HTTP_OPTIONS = {
	headers: new HttpHeaders({
	  'Content-Type': 'application/json',
	  Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
	})
  };
  
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private readonly http: HttpClient, 
		private readonly hashingService : HashingService, 
		private tokenService: TokenService,
		@Inject('BASE_API_URL') private baseUrl: string) {}

	redirectUrl = '';
	
	login(data: LoginRequestData): Observable<any> {
		this.tokenService.removeToken();
		const body = this.loginBody(data);
		
		return this.http.post<any>(this.baseUrl + loginUrl, body, HTTP_OPTIONS)
		.pipe(
			tap((res: ResponseLoginData) => {
				this.tokenService.saveToken(res.token);
			})
		);
	}

	clientRegister(data: ClientRegisterData): Observable<boolean> {
		data.password = this.hashingService.hashString(data.password);
		return this.http.post<boolean>(this.baseUrl + registerUrl, data);
	}

	logout(): void {
		this.tokenService.removeToken();
	}

	private loginBody(data: LoginRequestData) : HttpParams {
		return new HttpParams()
		.set('username', data.username)
		.set('password', this.hashingService.hashString(data.password))
		.set('grant_type', 'password');
	}

}
