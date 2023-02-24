import { Axios } from 'axios';

export class PlatformProxy {
  constructor(protected readonly axiosInstance: Axios) {}
}
