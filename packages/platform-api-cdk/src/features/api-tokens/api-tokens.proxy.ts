import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import {
  ApiTokenSortBy,
  IApiToken,
  IApiTokenDetails,
  IApiTokensSearchFilter,
  IApiTokenStatusInfo,
  INewApiToken,
  INewApiTokenResult,
  IResource,
  IResourceToPermissionRelation,
} from './models';

export class ApiTokensProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/api-tokens');
  }

  async findAll(
    filter: ICollectionFilter<IApiTokensSearchFilter, ApiTokenSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IApiToken>> {
    return this.get('', { params: filter, authTokenData });
  }

  async findAllResourceToPermissionRelations(authTokenData?: IAuthTokenData): Promise<IResourceToPermissionRelation[]> {
    return this.get(`/resource-permission-relations`, { authTokenData });
  }

  async findAllResources(authTokenData?: IAuthTokenData): Promise<IResource[]> {
    return this.get('/resources', { authTokenData });
  }

  async findOne(id: number, authTokenData?: IAuthTokenData): Promise<IApiTokenDetails> {
    return this.get(`/${id}`, { authTokenData });
  }

  async create(data: INewApiToken, authTokenData?: IAuthTokenData): Promise<INewApiTokenResult> {
    return this.post('', data, { authTokenData });
  }

  async updateStatus({ id, ...data }: IApiTokenStatusInfo, authTokenData?: IAuthTokenData): Promise<void> {
    return this.put(`/${id}/status`, data, { authTokenData });
  }

  async remove(id: number, authTokenData?: IAuthTokenData): Promise<void> {
    return this.delete(`/${id}`, { authTokenData });
  }
}
