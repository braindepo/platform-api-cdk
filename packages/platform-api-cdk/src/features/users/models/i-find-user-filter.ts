import { IFindUserBaseFilter } from '../../../shared/users';

export interface IFindUserFilter extends IFindUserBaseFilter {
  roleId?: number;
}
