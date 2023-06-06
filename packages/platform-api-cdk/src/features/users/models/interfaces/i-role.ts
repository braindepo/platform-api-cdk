import { RoleType } from '../../../../shared/auth';

export interface IRole {
  id: number;
  name: string;
  type: RoleType;
}
