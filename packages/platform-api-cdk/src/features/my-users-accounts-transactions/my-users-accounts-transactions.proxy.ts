import { Axios } from 'axios';

import {
  AccountOwnersSortBy,
  AccountTransactionSortBy,
  IAccountOwner,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
  IAccountTransactionsType,
} from '../../shared/billing';
import { IPaginatedData, ICollectionFilter, INameSearchFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';

export class MyUsersAccountsTransactionsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-users-accounts-transactions');
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

  async findAll(
    filter: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
  ): Promise<IPaginatedData<IAccountTransaction>> {
    return this.get('', { params: filter });
  }
}
