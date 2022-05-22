import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { RoleService } from './auth/service/role.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	constructor(
		public roleService: RoleService,
		public authService: AuthService) {}
}
