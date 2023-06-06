import { TaskCategory, TaskType } from '../../../../shared/tasks';

import { TaskStatus } from '../enums';
import { IMicroserviceRpcRequest } from './i-microservice-rpc-request';
import { IWebRequest } from './i-web-request';

export interface ITask {
  id: number;
  userId: number;
  externalId: string;
  startDate: string;
  lastUpdatedDate: string;
  status: TaskStatus;
  category: TaskCategory;
  taskType: TaskType;
  data: IWebRequest | IMicroserviceRpcRequest;
}
