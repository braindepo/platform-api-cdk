import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { ILog, ILogsSearchFilter, INewLog, LogsSortBy } from './models';

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
