import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ITaskInfo } from './models';

export class WebRequestTasksProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/web-request-tasks');
  }

  async create(data: ITaskInfo): Promise<number> {
    return this.post('', data);
  }

  async update({ externalId, ...taskInfo }: ITaskInfo): Promise<void> {
    return this.put(`/${externalId}`, taskInfo);
  }

  async remove(externalId: string): Promise<void> {
    return this.delete(`/${externalId}`);
  }
}
