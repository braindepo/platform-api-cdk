import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { IPaginatedData, ICollectionFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import {
  GameRelatedStatisticsSortBy,
  GeneralStatisticsSortBy,
  IGameRelatedStatistics,
  IGameRelatedStatisticsSearchFilter,
  IGeneralStatistics,
  IGeneralStatisticsSearchFilter,
  INewGameRelatedStatistics,
  INewGeneralStatistics,
} from './models';

export class StatisticsProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, 'statistics');
  }

  async generalStatisticsFindAll(
    filter: ICollectionFilter<IGeneralStatisticsSearchFilter, GeneralStatisticsSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IGeneralStatistics>> {
    return this.get('/general-statistics', { params: filter, authTokenData });
  }

  async generalStatisticsCreate(
    data: Array<INewGeneralStatistics>,
    authTokenData?: IAuthTokenData,
  ): Promise<Array<number>> {
    return this.post('/general-statistics', data, { authTokenData });
  }

  async gameRelatedStatisticsFindAll(
    filter: ICollectionFilter<IGameRelatedStatisticsSearchFilter, GameRelatedStatisticsSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IGameRelatedStatistics>> {
    return this.get('/game-related-statistics', { params: filter, authTokenData });
  }

  async gameRelatedStatisticsCreate(
    data: Array<INewGameRelatedStatistics>,
    authTokenData?: IAuthTokenData,
  ): Promise<Array<number>> {
    return this.post('/game-related-statistics', data, { authTokenData });
  }
}
