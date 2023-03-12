import { TaskType } from '../enums';
import { INewWebRequest } from './i-new-web-request';

export interface INewTask {
  type: TaskType;
  userId: number;
  externalId: string;
  startDate: string;
  data?: INewWebRequest;
}
