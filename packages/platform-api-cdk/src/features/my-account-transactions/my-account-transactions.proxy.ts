import { Axios } from 'axios';

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

  async typesFindAll(): Promise<IAccountTransactionsType[]> {
    return this.get('/types');
  }

  async sendersFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.get('/senders', { params: filter });
  }

  async recipientsFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.get('/recipients', { params: filter });
  }

  async summarizedFindAll(
    filter: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
  ): Promise<IPaginatedSummarizedData<IAccountTransaction, ITotalSum>> {
    return this.get('', { params: filter });
  }
}
