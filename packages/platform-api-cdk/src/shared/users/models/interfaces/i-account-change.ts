import { FinancialOperationType } from '../enums';

export interface IAccountChange {
  id: number;
  sum: number;
  operationType: FinancialOperationType;
  comment: string;
}
