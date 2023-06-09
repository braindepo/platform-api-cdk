import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
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

  async exists(filter: IFindUserBaseFilter, authTokenData?: IAuthTokenData): Promise<boolean> {
    return this.head('', { params: filter, authTokenData }).then((response) => response.status === 204);
  }

  async create(data: IBaseNewUser, authTokenData?: IAuthTokenData): Promise<number> {
    return this.post('', data, { authTokenData });
  }

  async findOne(id: number, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.get(`/${id}`, { authTokenData });
  }

  async findAll(
    filter: ICollectionFilter<IBaseUsersSearchFilter, MyPlayersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IUser>> {
    return this.get('', { params: filter, authTokenData });
  }

  async statusesFindAll(authTokenData?: IAuthTokenData): Promise<IUserStatus[]> {
    return this.get('/statuses', { authTokenData });
  }

  async updateSecurity({ id, ...securityInfo }: IUserSecurityInfo, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put(`/${id}/security`, securityInfo, { authTokenData });
  }

  async updateProfile({ id, ...profileInfo }: IUserProfileInfo, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put(`/${id}/profile`, profileInfo, { authTokenData });
  }

  async setBlockState({ id, ...blockStateData }: IUserBlockStateData, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put(`/${id}/is-blocked`, blockStateData, { authTokenData });
  }

  async updateLimit({ id, ...changeData }: IAccountChange, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put(`/${id}/limit`, changeData, { authTokenData });
  }
}
