import { RoleType } from '../enums';
import { IAccessData } from './i-access-data';

export interface IAuthToken {
  userId: number;
  username: string;
  roleType: RoleType;
  access: IAccessData[];
}
