import { IBaseUsersSearchFilter } from '../../../../shared/users';

export interface IUsersSearchFilter extends IBaseUsersSearchFilter {
  roleId?: number;
}
