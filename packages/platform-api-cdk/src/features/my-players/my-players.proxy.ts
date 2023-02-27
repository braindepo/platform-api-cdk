import { Axios } from 'axios';

import { PlatformProxy } from '../../shared/proxies';
import { IFindBaseFilter } from '../../shared/models';

export class MyPlayersProxy extends PlatformProxy {
  private readonly baseProxyUrl = '/my-players';

  constructor(axiosInstance: Axios) {
    super(axiosInstance);
  }

  async exists(filter: IFindBaseFilter): Promise<boolean> {
    return this.axiosInstance.head(this.baseProxyUrl, { params: filter }).then((response) => response.status === 204);
  }
}
