import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ITaskInfo } from './models';

export class WebRequestTasksProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/web-request-tasks');
  }

  async create(data: ITaskInfo, authTokenData?: IAuthTokenData): Promise<number> {
    return this.post('', data, { authTokenData });
  }

  async update({ externalId, ...taskInfo }: ITaskInfo, authTokenData?: IAuthTokenData): Promise<void> {
    return this.put(`/${externalId}`, taskInfo, { authTokenData });
  }

  async remove(externalId: string, authTokenData?: IAuthTokenData): Promise<void> {
    return this.delete(`/${externalId}`, { authTokenData });
  }
}
