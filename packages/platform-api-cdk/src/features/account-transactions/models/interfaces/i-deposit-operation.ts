import { AccountTransactionType } from '..';
import { IUnilateralOperation } from './i-unilateral-operation';

export interface IDepositOperation {
  type: AccountTransactionType.Deposit;
  data: IUnilateralOperation;
}
