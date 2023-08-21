import { INewDepositPaymentOrder } from './i-new-deposit-payment-order';
import { INewTransferPaymentOrder } from './i-new-transfer-payment-order';
import { INewWithdrawPaymentOrder } from './i-new-withdraw-payment-order';

export type INewPaymentOrder = INewDepositPaymentOrder | INewTransferPaymentOrder | INewWithdrawPaymentOrder;
