import { IPaginatedData } from './i-paginated-data';

export interface IPaginatedSummarizedData<T, K> extends IPaginatedData<T> {
  total: K;
}
