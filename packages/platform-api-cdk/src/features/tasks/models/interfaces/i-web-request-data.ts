import { WebRequestMethod } from '../../../../shared/tasks';

export interface IWebRequestData {
  method: WebRequestMethod;
  url: string;
  queryParams?: string;
  body?: string;
}
