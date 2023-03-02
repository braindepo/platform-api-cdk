import { Axios, RawAxiosRequestHeaders, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

import { AccountTransactionsProxy } from '../features/account-transactions';
import { AccountsProxy } from '../features/accounts';
import { AuthProxy } from '../features/auth';
import { GamesProxy } from '../features/games';
import { MyCashiersProxy } from '../features/my-cashiers';
import { MyPlayersProxy } from '../features/my-players';
import { UserProfileProxy } from '../features/user-profile';
import { UsersProxy } from '../features/users';

import { AuthMethod, IInterceptor } from './models';

export class ProxiesFactory {
  private readonly axiosInstance: Axios;

  setAuthToken(authToken: string, authMethod: AuthMethod): void {
    const authMethodPrefix = authMethod === AuthMethod.Jwt ? 'Bearer ' : 'Api-Key ';
    const headers = this.axiosInstance.defaults.headers as unknown as RawAxiosRequestHeaders;
    headers['Authorization'] = authMethodPrefix + authToken;
  }

  addRequestInterceptor(interceptor: IInterceptor<InternalAxiosRequestConfig>): void {
    this.axiosInstance.interceptors.request.use(interceptor.fulfilled, interceptor.rejected);
  }

  addResponceInterceptor(interceptor: IInterceptor<AxiosResponse>): void {
    this.axiosInstance.interceptors.response.use(interceptor.fulfilled, interceptor.rejected);
  }

  constructor(baseURL: string) {
    this.axiosInstance = new Axios({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  accountTransactions(): AccountTransactionsProxy {
    return new AccountTransactionsProxy(this.axiosInstance);
  }

  accounts(): AccountsProxy {
    return new AccountsProxy(this.axiosInstance);
  }

  auth(): AuthProxy {
    return new AuthProxy(this.axiosInstance);
  }

  games(): GamesProxy {
    return new GamesProxy(this.axiosInstance);
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
