import { RoleType, IAccessData } from '../../../../shared/auth';

export interface IAuthToken {
  userId: number;
  username: string;
  roleType: RoleType;
  access: IAccessData[];
}
