import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { IFindUserBaseFilter } from '../../shared/users';

import {
  IAuthToken,
  IEmailVerificationData,
  IEmailVerificationResult,
  ILoginPasswordAuthData,
  INewEmailVerificationTokenData,
  IRegisterData,
  IResetPasswordData,
  IResetPasswordResult,
  IRestorePasswordData,
  ITokenAuthData,
  IUserAuthConfig,
} from './models';

export class AuthProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/auth');
  }

  async exist(filter: IFindUserBaseFilter): Promise<boolean> {
    return this.head('', { params: filter }).then((response) => response.status === 204);
  }

  async login(loginPassword: ILoginPasswordAuthData): Promise<IUserAuthConfig> {
    return this.post('/login', loginPassword);
  }

  async register(register: IRegisterData): Promise<number> {
    return this.post('/register', register);
  }

  async restorePassword(data: IRestorePasswordData): Promise<void> {
    return this.post('/restore-password', data);
  }

  async resetPassword(data: IResetPasswordData): Promise<IResetPasswordResult> {
    return this.post('/reset-password', data);
  }

  async renewEmailVerificationToken(data: INewEmailVerificationTokenData): Promise<void> {
    return this.post('/renew-email-verification-token', data);
  }

  async verifyEmail(data: IEmailVerificationData): Promise<IEmailVerificationResult> {
    return this.post('/verify-email', data);
  }

  async verifyJwt(authTokenData: ITokenAuthData): Promise<IAuthToken> {
    return this.post('/verify-jwt', authTokenData);
  }

  async verifyApiToken(authTokenData: ITokenAuthData): Promise<IAuthToken> {
    return this.post('/verify-api-token', authTokenData);
  }
}
