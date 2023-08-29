import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { AccountSortBy, IAccountsSearchFilter, IAccount } from '../../shared/accounts';
import { IAccountInfo, INewAccount } from './models';

export class AccountsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/accounts');
  }

  async findAll(
    filter: ICollectionFilter<IAccountsSearchFilter, AccountSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IAccount>> {
    return this.get('', { params: filter, authTokenData });
  }

  async create(data: INewAccount[], authTokenData?: IAuthTokenData): Promise<number> {
    return this.post('', data, { authTokenData });
  }

  async update(data: IAccountInfo, authTokenData?: IAuthTokenData): Promise<void> {
    return this.post('', data, { authTokenData });
  }
}
