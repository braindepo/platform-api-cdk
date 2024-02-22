import { WebRequestMethod } from '../../../../shared/tasks';

export interface INewWebRequestTaskData {
  method: WebRequestMethod;
  url: string;
  queryParams?: string;
  body?: string;
  apiToken?: string;
}
