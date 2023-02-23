import { Axios } from 'axios';

import { PlatformProxy } from '../shared';

import { IFindUserFilter } from './models';

export class UsersProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/users';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async exists(filter: IFindUserFilter): Promise<boolean> {
    return this.axiosInstance.head(this.baseProxyUrl, { params: filter }).then((response) => {
      return response.status === 204 ? true : false;
    });
  }
}
