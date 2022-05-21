import { TestBed } from '@angular/core/testing';
import { UserRole } from '../data/user-roles';

import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;
  let role_key = 'role';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get role', () => {
    localStorage.setItem(role_key, UserRole.Client);
    
    expect(service.getRole()).toBe(UserRole.Client);
  });

  it('should save role', () => {
    service.saveRole(UserRole.Client);

    expect(localStorage.getItem(role_key)).toBe(UserRole.Client);
  });

  it('should remove role', () => {
    localStorage.setItem(role_key, UserRole.Client);
    service.removeRole();

    expect(localStorage.getItem(role_key)).toBeNull();
  });
});
