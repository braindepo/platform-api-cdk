import { AccountTransactionType } from '../../../../shared/account-transactions';

import { IBilateralOperation } from './i-bilateral-operation';

export interface ITransferOperation {
  type: AccountTransactionType.Transfer;
  data: IBilateralOperation;
}
