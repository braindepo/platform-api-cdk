import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { IUser } from '../../shared/users';
import { PlatformProxy } from '../../shared/proxies';
import { INewProfileVerificationRequest, IUpdateUserProfile, IUpdateUserSecurity } from './models';

export class UserProfileProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/user-profile');
  }

  async findOne(authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.get('', { authTokenData });
  }

  async updateSecurity(userSecurity: IUpdateUserSecurity, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put('/security', userSecurity, { authTokenData });
  }

  async updateProfile(userProfile: IUpdateUserProfile, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put('/profile', userProfile, { authTokenData });
  }

  async createVerificationRequest(
    data: INewProfileVerificationRequest,
    authTokenData?: IAuthTokenData,
  ): Promise<number> {
    return this.put('/verification-request', data, { authTokenData });
  }

  async remove(authTokenData?: IAuthTokenData): Promise<void> {
    return this.delete('', { authTokenData });
  }
}
