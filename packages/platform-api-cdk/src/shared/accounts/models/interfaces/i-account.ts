import { AccountCategory } from '../enums';

export interface IAccount {
  id: number;
  balance: number;
  externalId: string;
  category: AccountCategory;
}
