import { AccountTransactionType } from '..';
import { IUnilateralOperation } from './i-unilateral-operation';

export interface IRefillOperation {
  type: AccountTransactionType.Refill;
  data: IUnilateralOperation;
}
