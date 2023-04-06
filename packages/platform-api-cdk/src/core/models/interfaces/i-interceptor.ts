import { IApiGatewayError } from './i-api-gateway-error';

export interface IInterceptor<T = unknown> {
  fulfilled?: (value: T) => T | Promise<T>;
  rejected?: (error: IApiGatewayError) => IApiGatewayError;
}
