import { TaskStatus } from '../enums';

export interface ITasksSearchFilter {
  status?: TaskStatus;
  dateFrom?: string;
  dateTo?: string;
  type?: string;
}
