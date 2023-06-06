import { WebRequestMethod } from '../../../../shared/tasks';

export interface INewWebRequest {
  method: WebRequestMethod;
  url: string;
  queryParams?: string;
  body?: string;
  apiToken?: string;
}
