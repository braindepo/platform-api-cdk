import { IBaseNewUser } from '../../../../shared/users';

export interface INewUser extends IBaseNewUser {
  roleId: number;
}
