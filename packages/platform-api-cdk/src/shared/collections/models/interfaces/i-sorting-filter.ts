import { SortingDirection } from '..';

export interface ISortingFilter<T> {
  property: T;
  direction: SortingDirection;
}
