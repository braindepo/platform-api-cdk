import { Axios } from 'axios';

import { IAuthTokenData } from '../../core/models';
import { PlatformProxy } from '../proxies';
import { ICollectionFilter, IPaginatedData } from '../collections';
import { IFilesSearchFilter, FileSortBy, IFile } from './models';

export class FilesBaseProxy extends PlatformProxy {
  constructor(axiosInstance: Axios, baseUrl: string) {
    super(axiosInstance, baseUrl);
  }

  async getFilePath(id: number): Promise<string> {
    return this.axiosInstance.getUri({ url: `${this.baseUrl}/${id}` });
  }

  async findAll(
    filter: ICollectionFilter<IFilesSearchFilter, FileSortBy>,
    authTokenData?: IAuthTokenData,
  ): Promise<IPaginatedData<IFile>> {
    return this.get('', { params: filter, authTokenData });
  }

  async removePermanently(id: number, authTokenData?: IAuthTokenData): Promise<void> {
    return this.delete(`/${id}`, { authTokenData });
  }

  async add(formData: FormData, authTokenData?: IAuthTokenData): Promise<number> {
    return this.post('', formData, {
      supressDataStringification: true,
      authTokenData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}
