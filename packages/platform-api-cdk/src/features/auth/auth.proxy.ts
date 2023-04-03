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
  private readonly baseProxyUrl = '/auth';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async login(loginPassword: ILoginPasswordAuthData): Promise<IUserAuthConfig> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/login`, JSON.stringify(loginPassword))
      .then((response) => JSON.parse(response.data));
  }

  async register(register: IRegisterData): Promise<number> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/register`, JSON.stringify(register))
      .then((response) => JSON.parse(response.data));
  }

  async updateEmailVerificationToken(data: INewEmailVerificationTokenData): Promise<void> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/update-email-verification-token`, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async verifyEmail(data: IEmailVerificationData): Promise<IEmailVerificationResult> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/verify-email`, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async verifyJwt(authTokenData: ITokenAuthData): Promise<IAuthToken> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/verify-jwt`, JSON.stringify(authTokenData))
      .then((response) => JSON.parse(response.data));
  }

  async verifyApiToken(authTokenData: ITokenAuthData): Promise<IAuthToken> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/verify-api-token`, JSON.stringify(authTokenData))
      .then((response) => JSON.parse(response.data));
  }
}
