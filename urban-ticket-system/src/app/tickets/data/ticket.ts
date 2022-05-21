import {CategoryType} from './categoryType'

export interface Ticket {
  id: number;
  price: number;
  reduce: boolean;
  displayName:string;
  category: CategoryType;
  minutesOfValidity: number;
  daysOfValidity: number;
}
