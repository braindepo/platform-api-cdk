import { Axios, RawAxiosRequestHeaders } from 'axios';

import { AuthProxy } from '../features/auth';
import { MyCashiersProxy } from '../features/my-cashiers';
import { MyPlayersProxy } from '../features/my-players';
import { UserProfileProxy } from '../features/user-profile';
import { UsersProxy } from '../features/users';

import { AuthMethod } from './models';

export class ProxiesFactory {
  private readonly axiosInstance: Axios;

  setAuthToken(authToken: string, authMethod: AuthMethod): void {
    const authMethodPrefix = authMethod === AuthMethod.Jwt ? 'Bearer ' : 'Api-Key ';
    const headers = this.axiosInstance.defaults.headers as unknown as RawAxiosRequestHeaders;
    headers['Authorization'] = authMethodPrefix + authToken;
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

  myCashiers(): MyCashiersProxy {
    return new MyCashiersProxy(this.axiosInstance);
  }

  myPlayers(): MyPlayersProxy {
    return new MyPlayersProxy(this.axiosInstance);
  }

  users(): UsersProxy {
    return new UsersProxy(this.axiosInstance);
  }

  userProfile(): UserProfileProxy {
    return new UserProfileProxy(this.axiosInstance);
  }
}
