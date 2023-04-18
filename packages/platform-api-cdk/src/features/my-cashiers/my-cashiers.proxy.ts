import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import {
  IAccountChange,
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
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-cashiers');
  }

  async exists(filter: IFindUserBaseFilter): Promise<boolean> {
    return this.head('', { params: filter }).then((response) => response.status === 204);
  }

  async statusesFindAll(): Promise<IUserStatus[]> {
    return this.get('/statuses');
  }

  async findOne(id: number): Promise<IUser> {
    return this.get(`/${id}`);
  }

  async findAll(filter: ICollectionFilter<IBaseUsersSearchFilter, MyCashiersSortBy>): Promise<IPaginatedData<IUser>> {
    return this.get('', { params: filter });
  }

  async create(data: IBaseNewUser): Promise<number> {
    return this.post('', data);
  }

  async updateStatus({ id, ...statusInfo }: IUserStatusInfo): Promise<IUser> {
    return this.put(`/${id}/status`, statusInfo);
  }

  async updateSecurity({ id, ...securityInfo }: IUserSecurityInfo): Promise<IUser> {
    return this.put(`/${id}/security`, securityInfo);
  }

  async updateProfile({ id, ...profileInfo }: IUserProfileInfo): Promise<IUser> {
    return this.put(`/${id}/profile`, profileInfo);
  }

  async updateLimit({ id, ...changeData }: IAccountChange): Promise<IUser> {
    return this.put(`/${id}/limit`, changeData);
  }
}
