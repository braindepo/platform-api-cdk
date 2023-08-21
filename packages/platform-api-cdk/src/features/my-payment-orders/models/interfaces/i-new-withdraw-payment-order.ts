import { PaymentOrderType } from '../../../../shared/payment-orders';
import { INewPaymentOrderBase } from './i-new-payment-order-base';

export interface INewWithdrawPaymentOrder extends INewPaymentOrderBase<PaymentOrderType.Withdrawal> {
  fromId: string;
}
