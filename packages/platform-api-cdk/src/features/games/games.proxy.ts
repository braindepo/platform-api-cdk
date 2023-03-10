import { Axios } from 'axios';

import { IPaginatedData, ICollectionFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import { GamesSortBy, IGame, IGamesSearchFilter } from './models';

export class GamesProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/games';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findOne(id: number): Promise<IGame> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/${id}`).then((response) => JSON.parse(response.data));
  }

  async findAll(filter: ICollectionFilter<IGamesSearchFilter, GamesSortBy>): Promise<IPaginatedData<IGame>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: filter }).then((response) => JSON.parse(response.data));
  }
}
