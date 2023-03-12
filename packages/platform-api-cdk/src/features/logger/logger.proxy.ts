import { Axios } from 'axios';

import { IPaginatedData, ICollectionFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import { ILog, ILogsSearchFilter, LogsSortBy, INewLog } from './models';

export class LoggerProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/logs';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findAll(filter: ICollectionFilter<ILogsSearchFilter, LogsSortBy>): Promise<IPaginatedData<ILog>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: filter }).then((response) => JSON.parse(response.data));
  }

  async create(data: INewLog): Promise<bigint> {
    return this.axiosInstance
      .post(this.baseProxyUrl, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }
}
