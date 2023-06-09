import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, INameSearchFilter, IPaginatedData } from '../../shared/collections';
import {
  AccountOwnersSortBy,
  AccountTransactionSortBy,
  IAccountOwner,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
  IOperation,
} from './models';

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

  async sendersFindAll(
    data: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.get('/senders', { params: data, authTokenData });
  }

  async recipientsFindAll(
    data: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.get('/recipients', { params: data, authTokenData });
  }

  async create(data: IOperation[], authTokenData?: IAuthTokenData): Promise<number[]> {
    return this.post('', data, { authTokenData });
  }
}
