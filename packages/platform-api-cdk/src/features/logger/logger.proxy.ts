import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { ILog, ILogsSearchFilter, INewLog, LogsSortBy } from './models';

export class LoggerProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/logs');
  }

  async findAll(filter: ICollectionFilter<ILogsSearchFilter, LogsSortBy>): Promise<IPaginatedData<ILog>> {
    return this.get('', { params: filter });
  }

  async create(data: INewLog): Promise<bigint> {
    return this.post('', data);
  }
}
