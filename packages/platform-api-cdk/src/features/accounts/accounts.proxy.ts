import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { IAccount, INewAccount, IUpdateAccounts } from './models';

export class AccountsProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/accounts';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findOne(externalId: string): Promise<IAccount> {
    return this.axiosInstance
      .get(this.baseProxyUrl, { params: { externalId } })
      .then((response) => JSON.parse(response.data));
  }

  async create(data: INewAccount): Promise<number> {
    return this.axiosInstance.post(this.baseProxyUrl, data).then((response) => JSON.parse(response.data));
  }

  async update(data: IUpdateAccounts): Promise<void> {
    return this.axiosInstance.put(`${this.baseProxyUrl}`, data).then((response) => JSON.parse(response.data));
  }
}
