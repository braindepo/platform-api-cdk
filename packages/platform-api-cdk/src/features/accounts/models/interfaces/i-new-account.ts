import { AccountType } from '..';

export interface INewAccount {
  gameId?: number;
  ownerId: number;
  ownerName: string;
  externalId: string;
  cashierId?: number;
  cashierName?: string;
  partnerId?: number;
  partnerName?: string;
  accountType: AccountType;
}
