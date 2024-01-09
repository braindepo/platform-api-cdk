import { LogType } from '../enums';

export interface INewLog {
  url?: string;
  method?: string;
  body?: string;
  message?: string;
  stackTrace?: string;
  gameId?: number;
  type: LogType;
}
