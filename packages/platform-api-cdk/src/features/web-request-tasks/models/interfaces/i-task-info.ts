import { TaskType } from '../../../../shared/tasks';

import { INewWebRequest } from './i-new-web-request';

export interface ITaskInfo {
  type: TaskType;
  externalId: string;
  startDate: string;
  data?: INewWebRequest;
}
