import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { IBaseNewUser, IBaseUsersSearchFilter, IFindUserBaseFilter, IUser, IUserStatus } from '../../shared/users';
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
    return this.axiosInstance.post(this.baseProxyUrl, data).then((response) => JSON.parse(response.data));
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
}
