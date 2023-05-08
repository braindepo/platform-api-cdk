import { Axios } from 'axios';

import { FileBaseProxy } from '../../shared/files';

export class FileManagerProxy extends FileBaseProxy {
  constructor(axiosInstance: Axios) {
    super(axiosInstance, '/files');
  }
}
