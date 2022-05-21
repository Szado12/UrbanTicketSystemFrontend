import { UserRole } from './user-roles'

export interface  ResponseLoginData {
  token: string,
  role : UserRole,
  firstName : string,
  lastName : string
}
