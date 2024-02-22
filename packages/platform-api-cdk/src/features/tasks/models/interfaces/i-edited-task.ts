import { TaskStatus } from '../enums';

export interface IEditedTask {
  externalId: string;
  status: TaskStatus;
  startDate?: string;
}
