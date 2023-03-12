import { WebRequestMethod } from '../enums';

export interface IWebRequest {
  method: WebRequestMethod;
  url: string;
  queryParams?: string;
  body?: string;
}
