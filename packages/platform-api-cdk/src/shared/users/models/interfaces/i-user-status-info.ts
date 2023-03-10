import { UserStatus } from '../../../auth';

export interface IUserStatusInfo {
  id: number;
  status: UserStatus;
  message?: string;
}
