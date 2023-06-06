import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { ITask, ITasksSearchFilter, TasksSortBy } from './models';

export class TasksProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/tasks');
  }

  async findAll(filter: ICollectionFilter<ITasksSearchFilter, TasksSortBy>): Promise<IPaginatedData<ITask>> {
    return this.get('', { params: filter });
  }
}
