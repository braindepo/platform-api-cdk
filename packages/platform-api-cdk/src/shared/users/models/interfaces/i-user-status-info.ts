import { UserStatus } from '../../../auth';

export interface IUserStatusInfo {
  status: UserStatus;
  message?: string;
}
