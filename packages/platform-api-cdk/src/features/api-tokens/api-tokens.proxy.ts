import { Axios } from 'axios';

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

  async findAll(filter: ICollectionFilter<IApiTokensSearchFilter, ApiTokenSortBy>): Promise<IPaginatedData<IApiToken>> {
    return this.get('', { params: filter });
  }

  async findAllResourceToPermissionRelations(): Promise<IResourceToPermissionRelation[]> {
    return this.get(`/resource-permission-relations`);
  }

  async findAllResources(): Promise<IResource[]> {
    return this.get('/resources');
  }

  async findOne(id: number): Promise<IApiTokenDetails> {
    return this.get(`/${id}`);
  }

  async create(data: INewApiToken): Promise<INewApiTokenResult> {
    return this.post('', data);
  }

  async updateStatus({ id, ...data }: IApiTokenStatusInfo): Promise<void> {
    return this.put(`/${id}/status`, data);
  }

  async remove(id: number): Promise<void> {
    return this.delete(`/${id}`);
  }
}
