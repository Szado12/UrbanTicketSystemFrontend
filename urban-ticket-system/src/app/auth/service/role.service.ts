import { Injectable } from '@angular/core';

const ROLE = 'role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  getRole(): string | null {
    return localStorage.getItem(ROLE);
  }

  saveRole(role: string): void {
    localStorage.setItem(ROLE, role);
  }
  
  removeRole(): void {
    localStorage.removeItem(ROLE);
  }
}
