import { Axios } from 'axios';

import { PlatformProxy } from '../shared';

import { IAuthToken, ILoginPasswordAuthData, ITokenAuthData, IUserAuthConfig } from './models';

export class AuthProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/auth';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async login(loginPassword: ILoginPasswordAuthData): Promise<IUserAuthConfig> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/login`, JSON.stringify(loginPassword))
      .then((response) => response.data);
  }

  async verifyJwt(authTokenData: ITokenAuthData): Promise<IAuthToken> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/verify-jwt`, JSON.stringify(authTokenData))
      .then((response) => response.data);
  }

  async verifyApiToken(authTokenData: ITokenAuthData): Promise<IAuthToken> {
    return this.axiosInstance
      .post(`${this.baseProxyUrl}/verify-api-token`, JSON.stringify(authTokenData))
      .then((response) => response.data);
  }
}
