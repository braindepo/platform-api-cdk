import { TaskStatus, TaskType } from '../enums';

export interface ITasksSearchFilter {
  status?: TaskStatus;
  dateFrom?: string;
  dateTo?: string;
  type?: TaskType;
}
