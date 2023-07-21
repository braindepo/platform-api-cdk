import { AccountCategory, AccountType, IAccountManager } from '..';

export interface INewAccount {
  gameId?: number;
  externalId: string;
  type: AccountType;
  category: AccountCategory;
  owner: IAccountManager;
  managers?: IAccountManager[];
}
