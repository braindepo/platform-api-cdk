import { AccountTransactionType } from '../enums';

export interface IAccountTransaction {
  id: number;
  senderName?: string;
  fromAccountId?: number;
  recipientName?: string;
  toAccountId?: number;
  operatorId: string;
  operatorName: string;
  sum: number;
  date: string;
  comment?: string;
  transactionType: AccountTransactionType;
}
