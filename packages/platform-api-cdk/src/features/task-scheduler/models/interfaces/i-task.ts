import { TaskStatus, TaskType } from '../enums';
import { IWebRequest } from './i-web-request';

export interface ITask {
  id: number;
  userId: number;
  externalId: string;
  startDate: string;
  lastUpdatedDate: string;
  status: TaskStatus;
  taskType: TaskType;
  data?: IWebRequest;
}
