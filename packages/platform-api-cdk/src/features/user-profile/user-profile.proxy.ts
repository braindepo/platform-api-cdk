import { Axios } from 'axios';

import { IUser } from '../../shared/users';
import { PlatformProxy } from '../../shared/proxies';
import { IUpdateUserProfile, IUpdateUserSecurity } from './models';

export class UserProfileProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/user-profile';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findOne(): Promise<IUser> {
    return this.axiosInstance.get(this.baseProxyUrl).then((response) => JSON.parse(response.data));
  }

  async updateSecurity(userSecurity: IUpdateUserSecurity): Promise<IUser> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/security`, userSecurity)
      .then((response) => JSON.parse(response.data));
  }

  async updateProfile(userProfile: IUpdateUserProfile): Promise<IUser> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/profile`, userProfile)
      .then((response) => JSON.parse(response.data));
  }
}
