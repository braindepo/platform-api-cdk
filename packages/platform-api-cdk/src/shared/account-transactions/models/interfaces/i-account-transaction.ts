import { AccountTransactionType } from '..';

export interface IAccountTransaction {
  id: number;
  senderName?: string;
  fromAccountId?: string;
  recipientName?: string;
  toAccountId?: string;
  operatorId: number;
  operatorName: string;
  sum: number;
  date: string;
  comment?: string;
  transactionType: AccountTransactionType;
}
