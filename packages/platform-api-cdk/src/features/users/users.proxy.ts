import { Axios } from 'axios';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';

import { PlatformProxy } from '../../shared/proxies';
import { IUser, IUserProfileInfo, IUserSecurityInfo, IUserStatus, IUserStatusInfo } from '../../shared/users';

import { IFindUserFilter, INewUser, IRole, IUsersSearchFilter, UsersSortBy } from './models';

export class UsersProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/users';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async exists(filter: IFindUserFilter): Promise<boolean> {
    return this.axiosInstance.head(this.baseProxyUrl, { params: filter }).then((response) => response.status === 204);
  }

  async create(data: INewUser): Promise<number> {
    return this.axiosInstance
      .post(this.baseProxyUrl, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async findOne(id: number): Promise<IUser> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/${id}`).then((response) => JSON.parse(response.data));
  }

  async findAll(filter: ICollectionFilter<IUsersSearchFilter, UsersSortBy>): Promise<IPaginatedData<IUser>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: filter }).then((response) => JSON.parse(response.data));
  }

  async statusesFindAll(): Promise<IUserStatus[]> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/statuses`).then((response) => JSON.parse(response.data));
  }

  async rolesFindAll(): Promise<IRole[]> {
    return this.axiosInstance.get(`${this.baseProxyUrl}/roles`).then((response) => JSON.parse(response.data));
  }

  async updateSecurity({ id, ...securityInfo }: IUserSecurityInfo): Promise<IUser> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${id}/security`, JSON.stringify(securityInfo))
      .then((response) => JSON.parse(response.data));
  }

  async updateProfile({ id, ...profileInfo }: IUserProfileInfo): Promise<IUser> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${id}/profile`, JSON.stringify(profileInfo))
      .then((response) => JSON.parse(response.data));
  }

  async updateStatus({ id, ...statusInfo }: IUserStatusInfo): Promise<IUser> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${id}/status`, JSON.stringify(statusInfo))
      .then((response) => JSON.parse(response.data));
  }
}
