import { IDepositOperation } from './i-deposit-operation';
import { ITransferOperation } from './i-transfer-operation';
import { IWithdrawOperation } from './i-withdraw-operation';

export type IOperation = IDepositOperation | ITransferOperation | IWithdrawOperation;
