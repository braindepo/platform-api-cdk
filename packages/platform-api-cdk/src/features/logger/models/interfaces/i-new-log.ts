import { LogType } from '../enums';

export interface INewLog {
  message?: string;
  url?: string;
  stackTrace?: string;
  userId?: number;
  gameId?: number;
  type: LogType;
}
