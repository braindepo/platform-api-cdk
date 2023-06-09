import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import {
  IAccountChange,
  IUser,
  IUserProfileInfo,
  IUserSecurityInfo,
  IUserStatus,
  IUserBlockStateData,
} from '../../shared/users';
import {
  IFindUserFilter,
  INewUser,
  IProfileVerificationRequest,
  IProfileVerificationResult,
  IRole,
  IUsersSearchFilter,
  UsersSortBy,
} from './models';

export class UsersProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/users');
  }

  async exists(filter: IFindUserFilter, authTokenData?: IAuthTokenData): Promise<boolean> {
    return this.head('', { params: filter, authTokenData }).then((response) => response.status === 204);
  }

  async rolesFindAll(authTokenData?: IAuthTokenData): Promise<IRole[]> {
    return this.get('/roles', { authTokenData });
  }

  async statusesFindAll(authTokenData?: IAuthTokenData): Promise<IUserStatus[]> {
    return this.get('/statuses', { authTokenData });
  }

  async findProfileVerificationRequest(
    id: number,
    authTokenData?: IAuthTokenData,
  ): Promise<IProfileVerificationRequest> {
    return this.get(`/${id}/verification-request`, { authTokenData });
  }

  async findOne(id: number, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.get(`/${id}`, { authTokenData });
  }

  async findAll(
    filter: ICollectionFilter<IUsersSearchFilter, UsersSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IUser>> {
    return this.get('', { params: filter, authTokenData });
  }

  async create(data: INewUser, authTokenData?: IAuthTokenData): Promise<number> {
    return this.post('', data, { authTokenData });
  }

  async setProfileVerificationResult(
    { userId, ...data }: IProfileVerificationResult,
    authTokenData?: IAuthTokenData,
  ): Promise<void> {
    return this.put(`/${userId}/verification-request/is-verified`, data, { authTokenData });
  }

  async setBlockState({ id, ...blockStateData }: IUserBlockStateData, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put(`/${id}/is-blocked`, blockStateData, { authTokenData });
  }

  async updateSecurity({ id, ...securityInfo }: IUserSecurityInfo, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put(`/${id}/security`, securityInfo, { authTokenData });
  }

  async updateProfile({ id, ...profileInfo }: IUserProfileInfo, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put(`/${id}/profile`, profileInfo, { authTokenData });
  }

  async updateLimit({ id, ...changeData }: IAccountChange, authTokenData?: IAuthTokenData): Promise<IUser> {
    return this.put(`/${id}/limit`, changeData, { authTokenData });
  }
}
