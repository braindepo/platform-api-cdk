import { ITranslationsFilter } from '../../../../shared/translations';

export interface IBaseUsersSearchFilter extends ITranslationsFilter {
  id?: number;
  statusId?: number;
  usernameSearchToken?: string;
  nameSearchToken?: string;
  surnameSearchToken?: string;
  emailSearchToken?: string;
  balanceFrom?: number;
  balanceTo?: number;
}
