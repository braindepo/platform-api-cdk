import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { IFindUserBaseFilter } from '../../shared/users';

export class MyCashiersProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/my-cashiers';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async exists(filter: IFindUserBaseFilter): Promise<boolean> {
    return this.axiosInstance.head(this.baseProxyUrl, { params: filter }).then((response) => response.status === 204);
  }
}
