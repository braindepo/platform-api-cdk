export interface IBaseUsersSearchFilter {
  id?: number;
  statusId?: number;
  usernameSearchToken?: string;
  nameSearchToken?: string;
  surnameSearchToken?: string;
  emailSearchToken?: string;
  balanceFrom?: number;
  balanceTo?: number;
}
