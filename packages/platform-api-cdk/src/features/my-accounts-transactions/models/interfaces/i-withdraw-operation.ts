import { AccountTransactionType } from '../../../../shared/account-transactions';

import { IUnilateralOperation } from './i-unilateral-operation';

export interface IWithdrawOperation {
  type: AccountTransactionType.Withdrawal;
  data: IUnilateralOperation;
}
