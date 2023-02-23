import { Permission } from '../enums';

export interface IAccessData {
  resource: string;
  permissions: Permission[];
}
