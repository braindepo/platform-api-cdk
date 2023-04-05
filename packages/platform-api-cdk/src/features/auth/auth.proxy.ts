import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';

import {
  IAuthToken,
  IEmailVerificationData,
  IEmailVerificationResult,
  ILoginPasswordAuthData,
  INewEmailVerificationTokenData,
  IRegisterData,
  ITokenAuthData,
  IUserAuthConfig,
} from './models';

export class AuthProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/auth');
  }

  async login(loginPassword: ILoginPasswordAuthData): Promise<IUserAuthConfig> {
    return this.post('/login', loginPassword);
  }

  async register(register: IRegisterData): Promise<number> {
    return this.post('/register', register);
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
