import { LogType } from '../enums';

export interface ILogsSearchFilter {
  dateTo?: string;
  dateFrom?: string;
  type?: LogType;
}
