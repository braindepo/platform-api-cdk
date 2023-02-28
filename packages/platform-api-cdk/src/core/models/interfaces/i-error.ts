import { HttpStatusCode } from 'axios';

export interface IError {
  status: HttpStatusCode;
  message?: string;
}
