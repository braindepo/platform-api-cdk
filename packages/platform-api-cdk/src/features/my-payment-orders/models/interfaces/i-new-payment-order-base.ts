import { PaymentOrderType } from '../../../../shared/payment-orders';

export interface INewPaymentOrderBase<T extends PaymentOrderType> {
  type: T;
  sum: number;
  comment?: string;
}
