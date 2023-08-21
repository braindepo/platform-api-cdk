import { PaymentOrderType } from '../../../../shared/payment-orders';
import { INewPaymentOrderBase } from './i-new-payment-order-base';

export interface INewTransferPaymentOrder extends INewPaymentOrderBase<PaymentOrderType.Transfer> {
  fromId: string;
  toId: string;
}
