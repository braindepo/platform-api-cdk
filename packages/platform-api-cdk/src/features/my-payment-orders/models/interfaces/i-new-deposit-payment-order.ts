import { PaymentOrderType } from '../../../../shared/payment-orders';
import { INewPaymentOrderBase } from './i-new-payment-order-base';

export interface INewDepositPaymentOrder extends INewPaymentOrderBase<PaymentOrderType.Deposit> {
  toId: string;
}
