import { TaskType } from '../../../../shared/tasks';

import { TaskStatus } from '../enums';

export interface ITasksSearchFilter {
  status?: TaskStatus;
  nameSearchCriteria?: string;
  dateFrom?: string;
  dateTo?: string;
  type?: TaskType;
}
