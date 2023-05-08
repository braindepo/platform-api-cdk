import { Axios } from 'axios';

import { FileBaseProxy } from '../../shared/files';

export class MyFilesProxy extends FileBaseProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/my-files');
  }
}
