import { Component } from '@angular/core';
import { UserRole } from './auth/data/user-roles';
import { User } from './data/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	checkRole(): string | null {
		return localStorage.getItem('role')
	}
}
