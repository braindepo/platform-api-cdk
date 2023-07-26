import { AccountTransactionType } from '../enums';

export interface IAccountTransactionsSearchFilter {
  id?: number;
  fromAccountOwnerId?: number;
  toAccountOwnerId?: number;
  sumFrom?: number;
  sumTo?: number;
  dateFrom?: string;
  dateTo?: string;
  transactionType?: AccountTransactionType;
}
