import { IMyAccountsSearchFilter } from './i-my-accounts-search-filter';

export interface IAccountsSearchFilter extends IMyAccountsSearchFilter {
  ownerId?: string;
}
