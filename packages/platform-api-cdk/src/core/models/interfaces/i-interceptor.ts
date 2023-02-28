import { IError } from './i-error';

export interface IInterceptor<T = unknown> {
  fulfilled?: (value: T) => T | Promise<T>;
  rejected?: (error: IError) => IError;
}
