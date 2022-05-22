import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ClientRegisterData } from '../data/client-register-data';
import { LoginRequestData } from '../data/login-request-data';
import { HashingService } from './hashing.service';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
import { ResponseLoginData } from '../data/login-response-data';
import { FacebookLoginData } from '../data/facebook-login-data';
import { UserRole } from '../data/user-roles';
import { RoleService } from './role.service';

const registerUrl = '/register';
const loginUrl = '/login';
const facebookLoginUrl = '/facebook/login';

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
		private roleService: RoleService,
		@Inject('BASE_API_URL') private baseUrl: string) {}

	redirectUrl = '';
	
	login(data: LoginRequestData, role: UserRole): Observable<ResponseLoginData> {
		this.tokenService.removeToken();
		this.roleService.removeRole();

		data.password = this.hashingService.hashString(data.password);
		return this.http.post<ResponseLoginData>(this.baseUrl + loginUrl, data)
		.pipe(
			tap((res: ResponseLoginData) => {
				this.tokenService.saveToken(res.token);
				this.roleService.saveRole(res.role);
			})
		);
	}

	facebookLogin(data: FacebookLoginData): Observable<ResponseLoginData> {
		this.tokenService.removeToken();
		this.roleService.removeRole();

		return this.http.post<ResponseLoginData>(this.baseUrl + facebookLoginUrl, data)
		.pipe(
			tap((res: ResponseLoginData) => {
				this.tokenService.saveToken(res.token);
				this.roleService.saveRole(res.role);
			})
		);
	}

	clientRegister(data: ClientRegisterData): Observable<boolean> {
		data.password = this.hashingService.hashString(data.password);
		return this.http.post<boolean>(this.baseUrl + registerUrl, data);
	}

	logout(): void {
		this.tokenService.removeToken();
		this.roleService.removeRole();
	}
}
