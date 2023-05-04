import { FileStatus } from '../enums';

export interface IFile {
  id: number;
  nameWithExtention: string;
  downloadDate: string;
  ownerId: number;
  ownerName: string;
  status: FileStatus;
}
