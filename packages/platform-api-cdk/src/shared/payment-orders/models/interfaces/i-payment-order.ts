import { PaymentOrderType } from '../enums';

export interface IPaymentOrder {
  id: number;
  type: PaymentOrderType;
  senderName?: string;
  recipientName?: string;
  operatorName: string;
  sum: number;
  date: string;
  comment?: string;
}
