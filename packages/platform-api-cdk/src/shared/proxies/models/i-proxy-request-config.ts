import { AxiosRequestConfig } from 'axios';

export interface IProxyRequestConfig<T> extends AxiosRequestConfig<T> {
  supressDataStringification?: boolean;
}
