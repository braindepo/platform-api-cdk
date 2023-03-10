export interface IAccountTransactionsSearchFilter {
  id?: number;
  fromAccountExternalId?: string;
  toAccountExternalId?: string;
  operatorId?: number;
  partnerId?: number;
  cashierId?: number;
  sumFrom?: number;
  sumTo?: number;
  dateFrom?: string;
  dateTo?: string;
  transactionTypeId?: number;
}
