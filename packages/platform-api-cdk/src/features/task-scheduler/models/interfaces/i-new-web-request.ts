import { WebRequestMethod } from '../enums';

export interface INewWebRequest {
  method: WebRequestMethod;
  url: string;
  queryParams?: string;
  body?: string;
  apiToken?: string;
}
