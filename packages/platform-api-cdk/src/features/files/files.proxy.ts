import { Axios } from 'axios';

import { FilesBaseProxy } from '../../shared/files';

export class FilesProxy extends FilesBaseProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/files');
  }
}
