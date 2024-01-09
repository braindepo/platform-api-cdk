import { ApiGatewayErrorType, HttpStatus } from '../enums';

export interface IApiGatewayError {
  type: ApiGatewayErrorType;
  statusCode: HttpStatus;
  timestamp: string;
  path: string;
  messages: string[];
}
