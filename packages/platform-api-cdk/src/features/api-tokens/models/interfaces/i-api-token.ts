import { ApiTokenStatus } from '../enums';

export interface IApiToken {
  id: number;
  status: ApiTokenStatus;
  tokenMask: string;
  creationDate: string;
  expiredAtDate?: string;
}
