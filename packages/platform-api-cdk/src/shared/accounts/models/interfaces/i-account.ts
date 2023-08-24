import { AccountCategory, AccountType } from '../enums';

export interface IAccount {
  id: number;
  balance: number;
  category: AccountCategory;
  type: AccountType;
  ownerId: string;
}
