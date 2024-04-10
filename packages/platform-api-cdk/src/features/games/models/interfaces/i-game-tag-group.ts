import { IGameTag } from './i-game-tag';

export interface IGameTagGroup {
  id: number;
  name: string;
  tags: IGameTag[];
}
