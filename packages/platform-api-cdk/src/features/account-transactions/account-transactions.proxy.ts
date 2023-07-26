import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, INameSearchFilter, IPaginatedData } from '../../shared/collections';
import {
  AccountManagersSortBy,
  AccountTransactionSortBy,
  IAccountManager,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
} from '../../shared/account-transactions';

export class AccountTransactionsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/account-transactions');
  }

  async findAll(
    data: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountTransaction>> {
    return this.get('', { params: data, authTokenData });
  }

  async accountManagersFindAll(
    data: ICollectionFilter<INameSearchFilter, AccountManagersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountManager>> {
    return this.get('/account-managers', { params: data, authTokenData });
  }
}
