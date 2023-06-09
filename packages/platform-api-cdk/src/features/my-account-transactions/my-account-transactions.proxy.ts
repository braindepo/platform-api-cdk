import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { IPaginatedData, ICollectionFilter, INameSearchFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import {
  AccountOwnersSortBy,
  AccountTransactionSortBy,
  IAccountOwner,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
  IAccountTransactionsType,
} from '../../shared/billing';
import { ITotalSum, IPaginatedSummarizedData } from './models';

export class MyAccountTransactionsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-account-transactions');
  }

  async typesFindAll(authTokenData?: IAuthTokenData): Promise<IAccountTransactionsType[]> {
    return this.get('/types', { authTokenData });
  }

  async sendersFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.get('/senders', { params: filter, authTokenData });
  }

  async recipientsFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.get('/recipients', { params: filter, authTokenData });
  }

  async summarizedFindAll(
    filter: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedSummarizedData<IAccountTransaction, ITotalSum>> {
    return this.get('', { params: filter, authTokenData });
  }
}
