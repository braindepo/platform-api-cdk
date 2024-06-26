import { IGameTag } from './i-game-tag';

export interface IGame {
  id: number;
  name: string;
  displayName: string;
  url: string;
  previewImageFileId: number;
  tags: IGameTag[];
}
