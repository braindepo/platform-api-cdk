import { IAccessData } from '../../../../shared/auth';

import { ApiTokenStatus } from '../enums';

export interface IApiTokenDetails {
  id: number;
  status: ApiTokenStatus;
  tokenMask: string;
  creationDate: string;
  expiredAtDate?: string;
  comment?: string;
  access: IAccessData[];
}
