import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { ITask, ITaskInfo, ITasksSearchFilter, TasksSortBy } from './models';

export class TasksProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/tasks');
  }

  async findAll(
    filter: ICollectionFilter<ITasksSearchFilter, TasksSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<ITask>> {
    return this.get('', { params: filter, authTokenData });
  }

  async update({ externalId, ...taskInfo }: ITaskInfo, authTokenData?: IAuthTokenData): Promise<void> {
    return this.put(`/${externalId}`, taskInfo, { authTokenData });
  }
}
