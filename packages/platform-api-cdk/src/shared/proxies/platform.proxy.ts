import { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

export class PlatformProxy {
  constructor(protected readonly axiosInstance: Axios, protected readonly baseUrl?: string) {}

  protected post<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.axiosInstance
      .post(`${this.baseUrl}${url}`, JSON.stringify(data), config as AxiosRequestConfig<string>)
      .then(this.handleResponse<R>);
  }

  protected handleResponse = <T = unknown>(response: AxiosResponse<string>): T => {
    if (response.status >= 300) {
      throw response;
    }
    return response.data ? JSON.parse(response.data) : response.data;
  };
}
