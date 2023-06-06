import { RoleType, IAccessData } from '../../../../shared/auth';

export interface IUserAuthConfig {
  id: number;
  username: string;
  roleType: RoleType;
  token: string;
  defaultPage: string;
  access: IAccessData[];
}
