import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ClientLoginComponent } from './auth/client-login/client-login.component';
import { ClientRegisterComponent } from './auth/client-register/client-register.component';
import { InspectorLoginComponent } from './auth/inspector-login/inspector-login.component';
import { AuthGuard } from './auth/service/auth.guard';
import { ClientComponent } from './client/client.component';
import { TicketInspectorComponent } from './ticket-inspector/ticket-inspector.component';
import { BuyTicketComponent } from './tickets/buy-ticket/buy-ticket.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'auth/client/login',
    component: ClientLoginComponent,
  },
  {
    path: 'auth/client/register',
    component: ClientRegisterComponent,
  },
  {
    path: 'auth/inspector/login',
    component: InspectorLoginComponent,
  },
  {
    path: 'client',
    canActivate: [AuthGuard],
    data: {
      role: ['CLIENT', 'OAUTH_CLIENT']
    },
    component: ClientComponent,
  },
  {
    path: 'inspector',
    canActivate: [ AuthGuard ],    
    data: {
      role: 'STAFF'
    },
    component: TicketInspectorComponent,
  },
  {
    path: 'buy-ticket',
    canActivate: [AuthGuard],
    data: {
      role: ['CLIENT', 'OAUTH_CLIENT'],
    },
    component: BuyTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
