export interface IPaginatedData<T> {
  paginatedItems: T[];
  page: number;
  pageSize: number;
  totalItemsCount: number;
}
