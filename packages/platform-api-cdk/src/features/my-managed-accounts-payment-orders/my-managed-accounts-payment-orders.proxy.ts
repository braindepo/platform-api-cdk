import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { AccountManagerSortBy, IAccountManager, IAccountManagersSearchFilter } from '../../shared/account-managers';
import {
  AccountTransactionSortBy,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
  IPaymentOrder,
  IPaymentOrdersSearchFilter,
  PaymentOrderSortBy,
} from '../../shared/payment-orders';

export class MyManagedAccountsPaymentOrdersProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-managed-accounts-payment-orders');
  }

  async findAll(
    data: ICollectionFilter<IPaymentOrdersSearchFilter, PaymentOrderSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IPaymentOrder>> {
    return this.get('', { params: data, authTokenData });
  }

  async findOneTransactions(
    id: number,
    data: ICollectionFilter<IAccountTransactionsSearchFilter, AccountTransactionSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountTransaction>> {
    return this.get(`/${id}/transactions`, { params: data, authTokenData });
  }

  async accountManagersFindAll(
    data: ICollectionFilter<IAccountManagersSearchFilter, AccountManagerSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccountManager>> {
    return this.get('/managers', { params: data, authTokenData });
  }
}
