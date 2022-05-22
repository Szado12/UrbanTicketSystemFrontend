import { UserRole } from './user-roles'

export interface  ResponseLoginData {
  token: string,
  role : UserRole,
  name : string,
  surname : string
}
