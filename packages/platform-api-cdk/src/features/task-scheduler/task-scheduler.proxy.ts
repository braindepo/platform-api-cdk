import { Axios } from 'axios';

import { IPaginatedData, ICollectionFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import { ITasksSearchFilter, TasksSortBy, ITask, INewTask, ITaskInfo } from './models';

export class TaskSchedulerProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/tasks';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findAll(filter: ICollectionFilter<ITasksSearchFilter, TasksSortBy>): Promise<IPaginatedData<ITask>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: filter }).then((response) => JSON.parse(response.data));
  }

  async create(data: INewTask): Promise<number> {
    return this.axiosInstance
      .post(this.baseProxyUrl, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async update({ externalId, ...data }: ITaskInfo): Promise<void> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${externalId}`, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async remove(externalId: string): Promise<void> {
    return this.axiosInstance
      .delete(`${this.baseProxyUrl}/${externalId}`)
      .then((response) => JSON.parse(response.data));
  }
}
