import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';

import { IFindUserFilter } from './models';

export class UsersProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/users';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async exists(filter: IFindUserFilter): Promise<boolean> {
    return this.axiosInstance.head(this.baseProxyUrl, { params: filter }).then((response) => response.status === 204);
  }
}
