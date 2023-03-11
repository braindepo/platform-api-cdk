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
  private readonly baseProxyUrl = '/account-transactions';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findAll(
    data: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
  ): Promise<IPaginatedData<IAccountTransaction>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: data }).then((response) => JSON.parse(response.data));
  }

  async sendersFindAll(
    data: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.axiosInstance
      .get(`${this.baseProxyUrl}/senders`, { params: data })
      .then((response) => JSON.parse(response.data));
  }

  async recipientsFindAll(
    data: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.axiosInstance
      .get(`${this.baseProxyUrl}/recipients`, { params: data })
      .then((response) => JSON.parse(response.data));
  }

  async typesFindAll(): Promise<IAccountTransactionsType[]> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/types`).then((response) => JSON.parse(response.data));
  }

  async create(data: IOperation[]): Promise<number[]> {
    return this.axiosInstance.post(this.baseProxyUrl, data).then((response) => JSON.parse(response.data));
  }
}
