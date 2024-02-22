import { WebRequestMethod } from '../../../../shared/tasks';

export interface IWebRequestTaskData {
  method: WebRequestMethod;
  url: string;
  queryParams?: string;
  body?: string;
}
