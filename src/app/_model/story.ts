import { Account } from './account';

export interface Story {
  account: Account;
  self: boolean;
  viewed: boolean;
}
