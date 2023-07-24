export interface IAccountTransactionsSearchFilter {
  id?: number;
  fromAccountExternalId?: string;
  toAccountExternalId?: string;
  sumFrom?: number;
  sumTo?: number;
  dateFrom?: string;
  dateTo?: string;
  transactionTypeId?: number;
}
