import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import {
  IPaginatedSummarizedData,
  ICollectionFilter,
  INameSearchFilter,
  IPaginatedData,
} from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import { AccountManagersSortBy, AccountTransactionSortBy, IAccountManager } from '../../shared/account-transactions';
import { IAccountTransactionsTotalSum, IOperation, ISummarizedAccountTransactionsSearchFilter } from './models';

export class MyAccountTransactionsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-account-transactions');
  }

  async findAllSummarized(
    filter: ICollectionFilter<ISummarizedAccountTransactionsSearchFilter, AccountTransactionSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedSummarizedData<ISummarizedAccountTransactionsSearchFilter, IAccountTransactionsTotalSum>> {
    return this.get('', { params: filter, authTokenData });
  }

  async accountTransactionsSendersFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountManagersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountManager>> {
    return this.get('/senders', { params: filter, authTokenData });
  }

  async accountTransactionsRecipientsFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountManagersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountManager>> {
    return this.get('/recipients', { params: filter, authTokenData });
  }

  async create(data: IOperation[], authTokenData?: IAuthTokenData): Promise<number[]> {
    return this.post('', data, { authTokenData });
  }
}
