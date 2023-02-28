import { Axios } from 'axios';

import { IPaginatedData } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import { IGame } from './models';

export class GamesProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/games';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findOne(): Promise<IGame> {
    return this.axiosInstance.get(this.baseProxyUrl).then((response) => JSON.parse(response.data));
  }

  async findAll(): Promise<IPaginatedData<IGame>> {
    return this.axiosInstance.get(this.baseProxyUrl).then((response) => JSON.parse(response.data));
  }
}
