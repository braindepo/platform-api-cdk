import { AccountCategory, AccountType } from '../../../../shared/accounts';
import { IAccountManager } from '../../../../shared/account-managers';

export interface INewAccount {
  gameId?: number;
  type: AccountType;
  category: AccountCategory;
  owner: IAccountManager;
  managers?: IAccountManager[];
}
