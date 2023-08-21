import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { AccountSortBy, IAccountsSearchFilter, IAccount } from '../../shared/accounts';

export class MyManagedAccountsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-managed-accounts');
  }

  async findAll(
    filter: ICollectionFilter<IAccountsSearchFilter, AccountSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccount>> {
    return this.get('', { params: filter, authTokenData });
  }
}
