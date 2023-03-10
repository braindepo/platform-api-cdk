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
  private readonly baseProxyUrl = '/my-account-transactions';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async typesFindAll(): Promise<IAccountTransactionsType[]> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/types`).then((response) => JSON.parse(response.data));
  }

  async sendersFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.axiosInstance
      .get(`${this.baseProxyUrl}/senders`, { params: filter })
      .then((response) => JSON.parse(response.data));
  }

  async recipientsFindAll(
    filter: ICollectionFilter<INameSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.axiosInstance
      .get(`${this.baseProxyUrl}/recipients`, { params: filter })
      .then((response) => JSON.parse(response.data));
  }

  async summarizedFindAll(
    filter: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
  ): Promise<IPaginatedSummarizedData<IAccountTransaction, ITotalSum>> {
    return this.axiosInstance
      .get(`${this.baseProxyUrl}`, { params: filter })
      .then((response) => JSON.parse(response.data));
  }
}
