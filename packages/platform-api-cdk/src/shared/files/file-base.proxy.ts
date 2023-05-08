import { Axios } from 'axios';
import { PlatformProxy } from '../proxies';
import { ICollectionFilter, IPaginatedData } from '../collections';
import { IFilesSearchFilter, FileSortBy, IFile } from './models';

export class FileBaseProxy extends PlatformProxy {
  constructor(axiosInstance: Axios, baseUrl: string) {
    super(axiosInstance, baseUrl);
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
