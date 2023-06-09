import { AxiosRequestConfig } from 'axios';

import { IAuthTokenData } from '../../../core/models';

export interface IProxyRequestConfig<T> extends AxiosRequestConfig<T> {
  supressDataStringification?: boolean;
  authTokenData?: IAuthTokenData;
}
