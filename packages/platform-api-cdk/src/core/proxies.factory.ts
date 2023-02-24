import { Axios } from 'axios';

import { AuthProxy } from '../features/auth';
import { UsersProxy } from '../features/users';
import { AuthMethod } from './models';

export class ProxiesFactory {
  private readonly axiosInstance: Axios;

  setAuthToken(authToken: string, authMethod: AuthMethod): void {
    const authMethodPrefix = authMethod === AuthMethod.Jwt ? 'Bearer ' : 'Api-Key ';
    this.axiosInstance.defaults.headers.common.Authorization = authMethodPrefix + authToken;
  }

  constructor(baseURL: string) {
    this.axiosInstance = new Axios({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  auth(): AuthProxy {
    return new AuthProxy(this.axiosInstance);
  }

  users(): UsersProxy {
    return new UsersProxy(this.axiosInstance);
  }
}