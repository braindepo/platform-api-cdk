import { LogType } from '../enums';

export interface ILog {
  id: bigint;
  logDate: string;
  message?: string;
  stackTrace?: string;
  userId?: number;
  gameId?: number;
  type: LogType;
}
