import { UserStatus, RoleType } from '../../../auth/models';

export interface IUser {
  id: number;
  status: UserStatus;
  login: string;
  name: string;
  surname: string;
  reasonForBlocking?: string;
  verificationRejectionReason?: string;
  email: string;
  role: string;
  roleType: RoleType;
  balance: number;
}
