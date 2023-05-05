import { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

export class PlatformProxy {
  constructor(protected readonly axiosInstance: Axios, protected readonly baseUrl?: string) {}

  protected head<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance.head(`${this.baseUrl}${url}`, config);
  }

  protected get<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance.get(`${this.baseUrl}${url}`, config).then(this.handleResponse<R>);
  }

  protected post<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance
      .post(`${this.baseUrl}${url}`, JSON.stringify(data), config as AxiosRequestConfig<string>)
      .then(this.handleResponse<R>);
  }

  protected put<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance
      .put(`${this.baseUrl}${url}`, JSON.stringify(data), config as AxiosRequestConfig<string>)
      .then(this.handleResponse<R>);
  }

  protected delete<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance.delete(`${this.baseUrl}${url}`, config).then(this.handleResponse<R>);
  }

  protected handleResponse = <T = unknown>(response: AxiosResponse<string>): T => {
    if (response.status >= 300) {
      throw response;
    }
    return response.data ? JSON.parse(response.data) : response.data;
  };
}
