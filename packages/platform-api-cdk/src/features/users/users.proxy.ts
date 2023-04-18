import { Axios } from 'axios';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';

import { PlatformProxy } from '../../shared/proxies';
import {
  IAccountChange,
  IUser,
  IUserProfileInfo,
  IUserSecurityInfo,
  IUserStatus,
  IUserStatusInfo,
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

  async exists(filter: IFindUserFilter): Promise<boolean> {
    return this.head('', { params: filter }).then((response) => response.status === 204);
  }

  async rolesFindAll(): Promise<IRole[]> {
    return this.get('/roles');
  }

  async statusesFindAll(): Promise<IUserStatus[]> {
    return this.get('/statuses');
  }

  async findProfileVerificationRequest(id: number): Promise<IProfileVerificationRequest> {
    return this.get(`/${id}/verification-request`);
  }

  async findOne(id: number): Promise<IUser> {
    return this.get(`/${id}`);
  }

  async findAll(filter: ICollectionFilter<IUsersSearchFilter, UsersSortBy>): Promise<IPaginatedData<IUser>> {
    return this.get('', { params: filter });
  }

  async create(data: INewUser): Promise<number> {
    return this.post('', data);
  }

  async setProfileVerificationResult({ userId, ...data }: IProfileVerificationResult): Promise<void> {
    return this.put(`/${userId}/verification-request/is-verified`, data);
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
