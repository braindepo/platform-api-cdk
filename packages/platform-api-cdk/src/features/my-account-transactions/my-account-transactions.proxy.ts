import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import {
  IPaginatedSummarizedData,
  ICollectionFilter,
  INameSearchFilter,
  IPaginatedData,
} from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import {
  AccountManagersSortBy,
  AccountTransactionSortBy,
  IAccountManager,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
} from '../../shared/account-transactions';
import { IAccountTransactionsTotalSum, IOperation } from './models';

export class MyAccountTransactionsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-account-transactions');
  }

  async findAllSummarized(
    filter: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedSummarizedData<IAccountTransaction, IAccountTransactionsTotalSum>> {
    return this.get('', { params: filter, authTokenData });
  }

  async accountManagersFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountManagersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountManager>> {
    return this.get('/account-managers', { params: filter, authTokenData });
  }

  async create(data: IOperation[], authTokenData?: IAuthTokenData): Promise<number[]> {
    return this.post('', data, { authTokenData });
  }
}
