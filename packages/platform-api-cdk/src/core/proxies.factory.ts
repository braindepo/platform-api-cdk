import { Axios, RawAxiosRequestHeaders, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

import { AccountsProxy } from '../features/accounts';
import { ApiTokensProxy } from '../features/api-tokens';
import { AuthProxy } from '../features/auth';
import { FilesProxy } from '../features/files';
import { GamesProxy } from '../features/games';
import { LoggerProxy } from '../features/logger';
import { MyAccountsProxy } from '../features/my-accounts';
import { MyCashiersProxy } from '../features/my-cashiers';
import { MyFilesProxy } from '../features/my-files';
import { MyManagedAccountsProxy } from '../features/my-managed-accounts';
import { MyManagedAccountsPaymentOrdersProxy } from '../features/my-managed-accounts-payment-orders';
import { MyPaymentOrdersProxy } from '../features/my-payment-orders';
import { MyPlayersProxy } from '../features/my-players';
import { PaymentOrdersProxy } from '../features/payment-orders';
import { TasksProxy } from '../features/tasks';
import { UserProfileProxy } from '../features/user-profile';
import { UsersProxy } from '../features/users';
import { WebRequestTasksProxy } from '../features/web-request-tasks';

import { AuthMethod, IAuthTokenData, IInterceptor } from './models';

export class ProxiesFactory {
  private readonly axiosInstance: Axios;

  setAuthToken({ token, method }: IAuthTokenData): void {
    const authMethodPrefix = method === AuthMethod.Jwt ? 'Bearer ' : 'Api-Key ';
    const headers = this.axiosInstance.defaults.headers as unknown as RawAxiosRequestHeaders;
    headers['Authorization'] = authMethodPrefix + token;
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

  accounts(): AccountsProxy {
    return new AccountsProxy(this.axiosInstance);
  }

  apiTokens(): ApiTokensProxy {
    return new ApiTokensProxy(this.axiosInstance);
  }

  auth(): AuthProxy {
    return new AuthProxy(this.axiosInstance);
  }

  files(): FilesProxy {
    return new FilesProxy(this.axiosInstance);
  }

  games(): GamesProxy {
    return new GamesProxy(this.axiosInstance);
  }

  logger(): LoggerProxy {
    return new LoggerProxy(this.axiosInstance);
  }

  myAccounts(): MyAccountsProxy {
    return new MyAccountsProxy(this.axiosInstance);
  }

  myCashiers(): MyCashiersProxy {
    return new MyCashiersProxy(this.axiosInstance);
  }

  myFiles(): MyFilesProxy {
    return new MyFilesProxy(this.axiosInstance);
  }

  myManagedAccounts(): MyManagedAccountsProxy {
    return new MyManagedAccountsProxy(this.axiosInstance);
  }

  myManagedAccountsPaymentOrders(): MyManagedAccountsPaymentOrdersProxy {
    return new MyManagedAccountsPaymentOrdersProxy(this.axiosInstance);
  }

  myPaymentOrders(): MyPaymentOrdersProxy {
    return new MyPaymentOrdersProxy(this.axiosInstance);
  }

  myPlayers(): MyPlayersProxy {
    return new MyPlayersProxy(this.axiosInstance);
  }

  paymentOrders(): PaymentOrdersProxy {
    return new PaymentOrdersProxy(this.axiosInstance);
  }

  tasks(): TasksProxy {
    return new TasksProxy(this.axiosInstance);
  }

  userProfile(): UserProfileProxy {
    return new UserProfileProxy(this.axiosInstance);
  }

  users(): UsersProxy {
    return new UsersProxy(this.axiosInstance);
  }

  webRequestTasks(): WebRequestTasksProxy {
    return new WebRequestTasksProxy(this.axiosInstance);
  }
}
