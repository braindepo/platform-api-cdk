import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import {
  AccountManagersSortBy,
  AccountTransactionSortBy,
  IAccountManager,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
} from '../../shared/account-transactions';
import { IPaginatedData, ICollectionFilter, INameSearchFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';

export class MyUsersAccountsTransactionsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-users-accounts-transactions');
  }

  async findAll(
    filter: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountTransaction>> {
    return this.get('', { params: filter, authTokenData });
  }

  async accountManagersFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountManagersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountManager>> {
    return this.get('/account-managers', { params: filter, authTokenData });
  }
}
