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
  private readonly baseProxyUrl = '/api-tokens';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findOne(id: number): Promise<IApiTokenDetails> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/${id}`).then((response) => JSON.parse(response.data));
  }

  async findAll(filter: ICollectionFilter<IApiTokensSearchFilter, ApiTokenSortBy>): Promise<IPaginatedData<IApiToken>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: filter }).then((response) => JSON.parse(response.data));
  }

  async findAllResourceToPermissionRelations(): Promise<IResourceToPermissionRelation[]> {
    return this.axiosInstance
      .get(`${this.baseProxyUrl}/resource-permission-relations`)
      .then((response) => JSON.parse(response.data));
  }

  async findAllResources(): Promise<IResource[]> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/resources`).then((response) => JSON.parse(response.data));
  }

  async create(data: INewApiToken): Promise<INewApiTokenResult> {
    return this.axiosInstance
      .post(this.baseProxyUrl, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async updateStatus({ id, ...data }: IApiTokenStatusInfo): Promise<void> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${id}/status`, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async remove(id: number): Promise<void> {
    return this.axiosInstance.delete(`${this.baseProxyUrl}/${id}`).then((response) => JSON.parse(response.data));
  }
}
