import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { ICollectionFilter, IPaginatedData } from '../../shared/collections';
import { ITask, ITaskInfo, ITasksSearchFilter, TasksSortBy } from './models';

export class TaskSchedularProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/tasks';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async findAll(filter: ICollectionFilter<ITasksSearchFilter, TasksSortBy>): Promise<IPaginatedData<ITask>> {
    return this.axiosInstance.get(this.baseProxyUrl, { params: filter }).then((response) => JSON.parse(response.data));
  }

  async create(data: ITaskInfo): Promise<number> {
    return this.axiosInstance
      .post(this.baseProxyUrl, JSON.stringify(data))
      .then((response) => JSON.parse(response.data));
  }

  async update({ externalId, ...taskInfo }: ITaskInfo): Promise<void> {
    return this.axiosInstance
      .put(`${this.baseProxyUrl}/${externalId}`, JSON.stringify(taskInfo))
      .then((response) => JSON.parse(response.data));
  }

  async remove(externalId: string): Promise<void> {
    return this.axiosInstance
      .delete(`${this.baseProxyUrl}/${externalId}`)
      .then((response) => JSON.parse(response.data));
  }
}
