import { IAccessData } from '../../../../shared/auth';

export interface INewApiToken {
  userId: number;
  expiredAt?: string;
  comment?: string;
  access: IAccessData[];
}
