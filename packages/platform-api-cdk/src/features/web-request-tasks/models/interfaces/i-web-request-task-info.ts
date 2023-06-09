import { TaskCategory } from '../../../../shared/tasks';
import { INewWebRequest } from './i-new-web-request';

export interface IWebRequestTaskInfo {
  externalId: string;
  startDate: string;
  name: string;
  category: TaskCategory;
  intervalInMs?: number;
  data?: INewWebRequest;
}
