import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { IAccount } from '../../shared/accounts';
import { INewAccount, IUpdateAccounts } from './models';

export class AccountsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/accounts');
  }

  async findOne(externalId: string, authTokenData?: IAuthTokenData): Promise<IAccount> {
    return this.get('', { params: { externalId }, authTokenData });
  }

  async create(data: INewAccount, authTokenData?: IAuthTokenData): Promise<number> {
    return this.post('', data, { authTokenData });
  }

  async update(data: IUpdateAccounts, authTokenData?: IAuthTokenData): Promise<void> {
    return this.put('', data, { authTokenData });
  }
}
