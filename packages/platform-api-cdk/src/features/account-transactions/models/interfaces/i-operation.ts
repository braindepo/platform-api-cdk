import { IRefillOperation } from './i-refill-operation';
import { ITransferOperation } from './i-transfer-operation';
import { IWithdrawOperation } from './i-withdraw-operation';

export type IOperation = IRefillOperation | ITransferOperation | IWithdrawOperation;
