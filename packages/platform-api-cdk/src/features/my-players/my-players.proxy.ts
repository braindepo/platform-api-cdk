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
  IUserBlockStateData,
} from '../../shared/users';
import { MyPlayersSortBy } from './models';

export class MyPlayersProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-players');
  }

  async exists(filter: IFindUserBaseFilter): Promise<boolean> {
    return this.head('', { params: filter }).then((response) => response.status === 204);
  }

  async create(data: IBaseNewUser): Promise<number> {
    return this.post('', data);
  }

  async findOne(id: number): Promise<IUser> {
    return this.get(`/${id}`);
  }

  async findAll(filter: ICollectionFilter<IBaseUsersSearchFilter, MyPlayersSortBy>): Promise<IPaginatedData<IUser>> {
    return this.get('', { params: filter });
  }

  async statusesFindAll(): Promise<IUserStatus[]> {
    return this.get('/statuses');
  }

  async updateSecurity({ id, ...securityInfo }: IUserSecurityInfo): Promise<IUser> {
    return this.put(`/${id}/security`, securityInfo);
  }

  async updateProfile({ id, ...profileInfo }: IUserProfileInfo): Promise<IUser> {
    return this.put(`/${id}/profile`, profileInfo);
  }

  async setBlockState({ id, ...blockStateData }: IUserBlockStateData): Promise<IUser> {
    return this.put(`/${id}/is-blocked`, blockStateData);
  }

  async updateLimit({ id, ...changeData }: IAccountChange): Promise<IUser> {
    return this.put(`/${id}/limit`, changeData);
  }
}
