import { TaskCategory, TaskType } from '../../../../shared/tasks';

import { TaskStatus } from '../enums';
import { IDbBackupTaskData } from './i-db-backup-task-data';
import { IRpcRequestTaskData } from './i-rpc-request-task-data';
import { IWebRequestTaskData } from './i-web-request-task-data';

export interface ITask {
  id: number;
  userId: number;
  externalId: string;
  startDate: string;
  lastUpdatedDate: string;
  status: TaskStatus;
  category: TaskCategory;
  taskType: TaskType;
  data: IWebRequestTaskData | IRpcRequestTaskData | IDbBackupTaskData;
}
