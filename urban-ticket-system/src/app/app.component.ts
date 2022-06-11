import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { RoleService } from './auth/service/role.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BuyTicketCartService } from './tickets/buy-ticket/service/buy-ticket-cart.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	faShoppingCart = faShoppingCart;
	constructor(
		public buyTicketCart : BuyTicketCartService,
		public roleService: RoleService,
		public authService: AuthService) {}
}
