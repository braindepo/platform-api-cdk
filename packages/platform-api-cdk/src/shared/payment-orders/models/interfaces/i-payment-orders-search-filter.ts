import { PaymentOrderType } from '../enums';

export interface IPaymentOrdersSearchFilter {
  id?: number;
  senderId?: string;
  recepientId?: string;
  sumFrom?: number;
  sumTo?: number;
  dateFrom?: string;
  dateTo?: string;
  type?: PaymentOrderType;
}
