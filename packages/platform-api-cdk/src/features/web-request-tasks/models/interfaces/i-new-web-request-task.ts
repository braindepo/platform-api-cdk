import { TaskCategory } from '../../../../shared/tasks';
import { INewWebRequestTaskData } from './i-new-web-request-task-data';

export interface INewWebRequestTask {
  externalId: string;
  startDate: string;
  name: string;
  category: TaskCategory;
  intervalInMs?: number;
  data?: INewWebRequestTaskData;
}
