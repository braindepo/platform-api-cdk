import { ITranslationsFilter } from '../../../../shared/translations';

export interface IUsersSearchFilter extends ITranslationsFilter {
  id?: number;
  statusId?: number;
  usernameSearchToken?: string;
  nameSearchToken?: string;
  surnameSearchToken?: string;
  emailSearchToken?: string;
  balanceFrom?: number;
  balanceTo?: number;
  roleId?: number;
  partnerId?: number;
  cashierId?: number;
}
