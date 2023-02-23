import { Axios } from 'axios';

import { PlatformProxy } from '../shared';
import { IFindUserFilter } from './models';

export class UsersProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/users';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  exists(filter: IFindUserFilter): Promise<boolean | never> {
    return this.axiosInstance.head(this.baseProxyUrl, { params: filter })
  }
}