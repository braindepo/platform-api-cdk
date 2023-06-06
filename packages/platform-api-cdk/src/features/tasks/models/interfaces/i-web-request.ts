import { WebRequestMethod } from '../../../../shared/tasks';

export interface IWebRequest {
  method: WebRequestMethod;
  url: string;
  queryParams?: string;
  body?: string;
}
