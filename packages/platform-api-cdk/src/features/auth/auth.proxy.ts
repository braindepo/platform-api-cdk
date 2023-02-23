import { Axios } from 'axios';

import { PlatformProxy } from '../shared';
import { IAuthToken, ILoginPasswordAuthData, ITokenAuthData, IUserAuthConfig } from './models';

export class AuthProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/auth';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  login(loginPassword: ILoginPasswordAuthData): Promise<IUserAuthConfig> {
    return this.axiosInstance.post(`${this.baseProxyUrl}/login`, loginPassword);
  }

  verifyJwt(authTokenData: ITokenAuthData): Promise<IAuthToken> {
    return this.axiosInstance.post(`${this.baseProxyUrl}/verify-jwt`, authTokenData);
  }

  verifyApiToken(authTokenData: ITokenAuthData): Promise<IAuthToken> {
    return this.axiosInstance.post(`${this.baseProxyUrl}/verify-api-token`, authTokenData);
  }
}
