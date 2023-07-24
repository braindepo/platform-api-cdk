import { AccountTransactionType } from '../../../../shared/account-transactions';

import { IUnilateralOperation } from './i-unilateral-operation';

export interface IDepositOperation {
  type: AccountTransactionType.Deposit;
  data: IUnilateralOperation;
}
