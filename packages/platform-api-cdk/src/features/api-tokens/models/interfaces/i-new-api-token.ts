import { IAccessData } from '../../../../shared/auth';

export interface INewApiToken {
  expiredAt?: string;
  comment?: string;
  access: IAccessData[];
}
