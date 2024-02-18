import { TaskCategory, TaskType } from '../../../../shared/tasks';

import { TaskStatus } from '../enums';
import { IDbBackupData } from './i-db-backup-data';
import { IRpcRequestData } from './i-rpc-request-data';
import { IWebRequestData } from './i-web-request-data';

export interface ITask {
  id: number;
  userId: number;
  externalId: string;
  startDate: string;
  lastUpdatedDate: string;
  status: TaskStatus;
  category: TaskCategory;
  taskType: TaskType;
  data: IWebRequestData | IRpcRequestData | IDbBackupData;
}
