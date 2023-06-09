import { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

import { AuthMethod } from '../../core/models';
import { IProxyRequestConfig } from './models';

export class PlatformProxy {
  constructor(protected readonly axiosInstance: Axios, protected readonly baseUrl?: string) {}

  protected head<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: IProxyRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance.head(`${this.baseUrl}${url}`, this.toAxiosRequestConfig(config));
  }

  protected get<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: IProxyRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance
      .get(`${this.baseUrl}${url}`, this.toAxiosRequestConfig(config))
      .then(this.handleResponse<R>);
  }

  protected post<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: IProxyRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance
      .post(
        `${this.baseUrl}${url}`,
        config?.supressDataStringification ? data : JSON.stringify(data),
        this.toAxiosRequestConfig(config),
      )
      .then(this.handleResponse<R>);
  }

  protected put<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: IProxyRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance
      .put(
        `${this.baseUrl}${url}`,
        config?.supressDataStringification ? data : JSON.stringify(data),
        this.toAxiosRequestConfig(config),
      )
      .then(this.handleResponse<R>);
  }

  protected delete<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: IProxyRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance
      .delete(`${this.baseUrl}${url}`, this.toAxiosRequestConfig(config))
      .then(this.handleResponse<R>);
  }

  protected handleResponse = <T = unknown>(response: AxiosResponse<string>): T => {
    if (response.status >= 300) {
      throw response;
    }
    return response.data ? JSON.parse(response.data) : response.data;
  };

  private toAxiosRequestConfig<D>(config?: IProxyRequestConfig<D>): AxiosRequestConfig<D> | undefined {
    if (!config) return config;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { supressDataStringification, authTokenData, ...result } = config;
    if (authTokenData) {
      const { token, method } = authTokenData;
      const authMethodPrefix = method === AuthMethod.Jwt ? 'Bearer ' : 'Api-Key ';
      const authHeaders = { Authorization: authMethodPrefix + token };
      result.headers = {
        ...result.headers,
        ...authHeaders,
      };
    }
    return result;
  }
}
