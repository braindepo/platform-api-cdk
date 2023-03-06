import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import {
  IBaseNewUser,
  IBaseUsersSearchFilter,
  IFindUserBaseFilter,
  IUser,
  IUserProfileInfo,
  IUserSecurityInfo,
  IUserStatus,
  IUserStatusInfo,
} from '../../shared/users';
import { MyCashiersSortBy } from './models';

export class MyCashiersProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/my-cashiers';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async exists(filter: IFindUserBaseFilter): Promise<boolean> {
    return this.axiosInstance.head(this.baseProxyUrl, { params: filter }).then((response) => response.status === 204);
  }

  async create(data: IBaseNewUser): Promise<number> {
    return this.axiosInstance
      .post(this.baseProxyUrl, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async findOne(id: number): Promise<IUser> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: { id } }).then((response) => JSON.parse(response.data));
  }

  async findAll(filter: ICollectionFilter<IBaseUsersSearchFilter, MyCashiersSortBy>): Promise<IPaginatedData<IUser>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: filter }).then((response) => JSON.parse(response.data));
  }

  async statusesFindAll(): Promise<IUserStatus[]> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/statuses`).then((response) => JSON.parse(response.data));
  }

  async updateSecurity(data: IUserSecurityInfo): Promise<IUser> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${data.id}/security`, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async updateProfile(data: IUserProfileInfo): Promise<IUser> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${data.id}/profile`, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async updateStatus(data: IUserStatusInfo): Promise<IUser> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${data.id}/status`, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }
}
