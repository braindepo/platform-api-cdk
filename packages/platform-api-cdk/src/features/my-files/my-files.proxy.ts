import { Axios } from 'axios';

import { FilesBaseProxy } from '../../shared/files';

export class MyFilesProxy extends FilesBaseProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-files');
  }
}
