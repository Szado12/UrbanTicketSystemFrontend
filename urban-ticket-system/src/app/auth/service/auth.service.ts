import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ClientLoginData } from '../data/client-login-data';
import { ClientRegisterData } from '../data/client-register-data';
import { InspectorLoginData } from '../data/inspector-login-data';
import { HashingService } from './hashing.service';

const registerUrl = '/register';
const loginUrl = '/login';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private readonly http: HttpClient, private readonly hashingService : HashingService, @Inject('BASE_API_URL') private baseUrl: string) {}

	clientLogin(data: ClientLoginData): Observable<boolean> {
    data.password = this.hashingService.hashString(data.password);
		return this.http.post<boolean>(this.baseUrl + loginUrl, data);
	}

	clientRegister(data: ClientRegisterData): Observable<boolean> {
    data.password = this.hashingService.hashString(data.password);
		return this.http.post<boolean>(this.baseUrl + registerUrl, data);
	}

	inspectorLogin(data: InspectorLoginData): Observable<boolean> {
    data.password = this.hashingService.hashString(data.password);
		return this.http.post<boolean>(this.baseUrl + loginUrl, data);
	}
}
