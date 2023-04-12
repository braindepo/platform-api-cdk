import { Axios } from 'axios';

import { IUser } from '../../shared/users';
import { PlatformProxy } from '../../shared/proxies';
import { INewProfileVerificationRequest, IUpdateUserProfile, IUpdateUserSecurity } from './models';

export class UserProfileProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/user-profile');
  }

  async findOne(): Promise<IUser> {
    return this.get('');
  }

  async createVerificationRequest(data: INewProfileVerificationRequest): Promise<number> {
    return this.put('/verification-request', data);
  }

  async updateSecurity(userSecurity: IUpdateUserSecurity): Promise<IUser> {
    return this.put('/security', userSecurity);
  }

  async updateProfile(userProfile: IUpdateUserProfile): Promise<IUser> {
    return this.put('/profile', userProfile);
  }
}
