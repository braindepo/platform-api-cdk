import { Axios } from 'axios';

import { IUser } from '../../shared/users';
import { PlatformProxy } from '../../shared/proxies';

export class UserProfileProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/user-profile';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findOne(): Promise<IUser> {
    return this.axiosInstance.get(this.baseProxyUrl).then((response) => JSON.parse(response.data));
  }
}
