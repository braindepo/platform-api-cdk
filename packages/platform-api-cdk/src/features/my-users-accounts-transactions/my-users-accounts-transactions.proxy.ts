import { Axios } from 'axios';

import {
  AccountOwnersSortBy,
  AccountTransactionSortBy,
  IAccountOwner,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
  IAccountTransactionsType,
  IdNamePairsSearchFilter,
} from '../../shared/billing';
import { IPaginatedData, ICollectionFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';

export class MyUsersAccountsTransactionsProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/my-users-accounts-transactions';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async typesFindAll(): Promise<IAccountTransactionsType[]> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/types`).then((response) => JSON.parse(response.data));
  }

  async sendersFindAll(
    filter: ICollectionFilter<IdNamePairsSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.axiosInstance
      .get(`${this.baseProxyUrl}/senders`, { params: filter })
      .then((response) => JSON.parse(response.data));
  }

  async recipientsFindAll(
    filter: ICollectionFilter<IdNamePairsSearchFilter, AccountOwnersSortBy>,
  ): Promise<IPaginatedData<IAccountOwner>> {
    return this.axiosInstance
      .get(`${this.baseProxyUrl}/recipients`, { params: filter })
      .then((response) => JSON.parse(response.data));
  }

  async findAll(
    filter: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
  ): Promise<IPaginatedData<IAccountTransaction>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: filter }).then((response) => JSON.parse(response.data));
  }
}
