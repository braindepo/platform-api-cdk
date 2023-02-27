import { IFindBaseFilter } from '../../../shared/models';

export interface IFindUserFilter extends IFindBaseFilter {
  roleId?: number;
}
