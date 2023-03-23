import { ApiTokenUpdatableStatus } from '../enums';

export interface IApiTokenStatusInfo {
  id: number;
  status: ApiTokenUpdatableStatus;
}
