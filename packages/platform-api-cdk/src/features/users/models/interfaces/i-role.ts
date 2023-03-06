import { RoleType } from '../../../auth/models';

export interface IRole {
  id: number;
  name: string;
  type: RoleType;
}
