import { IPaginatedData } from '../../../../shared/collections';

export interface IPaginatedSummarizedData<T, K> extends IPaginatedData<T> {
  total: K;
}
