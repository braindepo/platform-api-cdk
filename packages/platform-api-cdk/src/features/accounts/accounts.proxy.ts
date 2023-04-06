import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { IAccount, INewAccount, IUpdateAccounts } from './models';

export class AccountsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/accounts');
  }

  async findOne(externalId: string): Promise<IAccount> {
    return this.get('', { params: { externalId } });
  }

  async create(data: INewAccount): Promise<number> {
    return this.post('', data);
  }

  async update(data: IUpdateAccounts): Promise<void> {
    return this.put('', data);
  }
}
