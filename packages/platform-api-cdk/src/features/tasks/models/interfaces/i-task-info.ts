import { TaskStatus } from '../enums';

export interface ITaskInfo {
  externalId: string;
  status: TaskStatus;
  startDate?: string;
}
