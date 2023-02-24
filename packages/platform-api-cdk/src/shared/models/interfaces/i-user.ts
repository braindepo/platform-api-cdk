import { UserStatus, RoleType } from '../enums';

export interface IUser {
  id: number;
  status: UserStatus;
  login: string;
  name: string;
  surname: string;
  reasonForBlocking: string;
  email: string;
  balance: number;
  role: string;
  roleType: RoleType;
}
