import { RoleType } from '../enums';
import { IAccessData } from './i-access-data';

export interface IUserAuthConfig {
  id: number;
  username: string;
  roleType: RoleType;
  token: string;
  defaultPage: string;
  access: IAccessData[];
}
