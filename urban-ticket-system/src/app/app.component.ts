import { Component } from '@angular/core';
import { User } from './data/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	user: User = {
		firstname: 'asd',
		lastname: 'asd',
		role: 'client'
	};
}
