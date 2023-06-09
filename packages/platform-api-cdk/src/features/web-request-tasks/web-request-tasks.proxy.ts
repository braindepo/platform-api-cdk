import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { IWebRequestTaskInfo } from './models';

export class WebRequestTasksProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/web-request-tasks');
  }

  async create(data: IWebRequestTaskInfo, authTokenData?: IAuthTokenData): Promise<number> {
    return this.post('', data, { authTokenData });
  }

  async update({ externalId, ...taskInfo }: IWebRequestTaskInfo, authTokenData?: IAuthTokenData): Promise<void> {
    return this.put(`/${externalId}`, taskInfo, { authTokenData });
  }

  async remove(externalId: string, authTokenData?: IAuthTokenData): Promise<void> {
    return this.delete(`/${externalId}`, { authTokenData });
  }
}
