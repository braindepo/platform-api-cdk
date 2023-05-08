import { FileStatus } from '../enums';

export interface IFilesSearchFilter {
  id?: number;
  ownerId?: number;
  nameSearchToken?: string;
  statuses?: FileStatus[];
}
