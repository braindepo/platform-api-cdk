import { Axios } from 'axios';

import { IPaginatedData, ICollectionFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import { GamesSortBy, IGame, IGamesSearchFilter } from './models';

export class GamesProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/games');
  }

  async getPreviewImagePath(id: number): Promise<string> {
    return this.axiosInstance.getUri({ url: `${this.baseUrl}/${id}/previewImage` });
  }

  async findOne(id: number): Promise<IGame> {
    return this.get(`/${id}`);
  }

  async findAll(filter: ICollectionFilter<IGamesSearchFilter, GamesSortBy>): Promise<IPaginatedData<IGame>> {
    return this.get('', { params: filter });
  }
}
