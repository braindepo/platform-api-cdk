import { IPaginationFilter } from './i-pagination-filter';
import { ISortingFilter } from './i-sorting-filter';

export interface ICollectionFilter<TSearchFilter, TSortBy> {
  search?: TSearchFilter;
  sorting?: ISortingFilter<TSortBy>;
  pagination?: IPaginationFilter;
}
