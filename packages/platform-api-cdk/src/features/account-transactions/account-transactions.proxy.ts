import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, INameSearchFilter, IPaginatedData } from '../../shared/collections';
import { IAccountTransactionsType } from '../../shared/billing';

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
  ): Promise<IPaginatedData<IAccountTransaction>> {
    return this.get('', { params: data });
  }

  async sendersFindAll(
    data: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.get('/senders', { params: data });
  }

  async recipientsFindAll(
    data: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.get('/recipients', { params: data });
  }

  async typesFindAll(): Promise<IAccountTransactionsType[]> {
    return this.get('/types');
  }

  async create(data: IOperation[]): Promise<number[]> {
    return this.post('', data);
  }
}
