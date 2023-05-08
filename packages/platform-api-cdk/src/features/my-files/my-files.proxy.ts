import { Axios } from 'axios';

import { IPaginatedData, ICollectionFilter } from '../../shared/collections';
import { PlatformProxy } from '../../shared/proxies';
import { IFilesSearchFilter, FileSortBy, IFile } from '../../shared/files';

export class MyFilesProxy extends PlatformProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-files');
  }

  async getFilePath(id: number): Promise<string> {
    return this.axiosInstance.getUri({ url: `${this.baseUrl}/${id}` });
  }

  async findAll(filter: ICollectionFilter<IFilesSearchFilter, FileSortBy>): Promise<IPaginatedData<IFile>> {
    return this.get('', { params: filter });
  }

  async removePermanently(id: number): Promise<void> {
    return this.delete(`/${id}`);
  }

  async add(formData: FormData): Promise<number> {
    return this.post('', formData, {
      supressDataStringification: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}
