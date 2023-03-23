import { Permission } from '../../../../shared/auth';

export interface IResourceToPermissionRelation {
  resource: string;
  permissions: Permission[];
  gameId?: number;
  gameName?: string;
}
