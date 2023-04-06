import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { ITask, ITaskInfo, ITasksSearchFilter, TasksSortBy } from './models';

export class TaskSchedularProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/tasks');
  }

  async findAll(filter: ICollectionFilter<ITasksSearchFilter, TasksSortBy>): Promise<IPaginatedData<ITask>> {
    return this.get('', { params: filter });
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
