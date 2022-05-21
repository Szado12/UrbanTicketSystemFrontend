import {UserRole} from './user-roles'

export interface  ResponseLoginData{
  token: String,
  role : UserRole,
  firstName : String,
  lastName : String
}
