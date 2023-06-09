import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { ILog, ILogsSearchFilter, INewLog, LogsSortBy } from './models';

export class LoggerProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/logs');
  }

  async findAll(
    filter: ICollectionFilter<ILogsSearchFilter, LogsSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<ILog>> {
    return this.get('', { params: filter, authTokenData });
  }

  async create(data: INewLog, authTokenData?: IAuthTokenData): Promise<bigint> {
    return this.post('', data, { authTokenData });
  }
}
