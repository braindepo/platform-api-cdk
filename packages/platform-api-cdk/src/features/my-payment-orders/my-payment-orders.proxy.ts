import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData, IPaginatedSummarizedData } from '../../shared/collections';
import { AccountManagerSortBy, IAccountManager, IAccountManagersSearchFilter } from '../../shared/account-managers';
import {
  AccountTransactionSortBy,
  IAccountTransaction,
  IAccountTransactionsSearchFilter,
  IPaymentOrder,
  IPaymentOrdersSearchFilter,
  PaymentOrderSortBy,
} from '../../shared/payment-orders';
import { INewPaymentOrder, IPaymentOrdersTotalSum } from './models';

export class MyPaymentOrdersProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-payment-orders');
  }

  async findAllSummarized(
    data: ICollectionFilter<IPaymentOrdersSearchFilter, PaymentOrderSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedSummarizedData<IPaymentOrder, IPaymentOrdersTotalSum>> {
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

  async create(data: Array<INewPaymentOrder>, authTokenData?: IAuthTokenData): Promise<number[] | never> {
    return this.post('', data, { authTokenData });
  }
}
