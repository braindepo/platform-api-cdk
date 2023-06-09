import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
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

  async findOne(id: number, authTokenData?: IAuthTokenData): Promise<IGame> {
    return this.get(`/${id}`, { authTokenData });
  }

  async findAll(
    filter: ICollectionFilter<IGamesSearchFilter, GamesSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IGame>> {
    return this.get('', { params: filter, authTokenData });
  }
}
