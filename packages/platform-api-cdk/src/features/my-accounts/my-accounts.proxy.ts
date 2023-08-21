import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { AccountSortBy, IMyAccountsSearchFilter, IAccount } from '../../shared/accounts';

export class MyAccountsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-accounts');
  }

  async findAll(
    filter: ICollectionFilter<IMyAccountsSearchFilter, AccountSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccount>> {
    return this.get('', { params: filter, authTokenData });
  }
}
