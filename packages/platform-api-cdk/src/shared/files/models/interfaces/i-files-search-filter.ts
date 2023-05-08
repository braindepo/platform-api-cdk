import { FileStatus } from '../enums';

export interface IFilesSearchFilter {
  id?: number;
  nameSearchToken?: string;
  statuses?: FileStatus[];
}
