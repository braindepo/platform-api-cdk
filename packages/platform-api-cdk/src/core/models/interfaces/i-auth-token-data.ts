import { AuthMethod } from '../enums';

export interface IAuthTokenData {
  token: string;
  method: AuthMethod;
}
