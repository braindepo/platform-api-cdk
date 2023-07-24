import { IAccountTransactionsSearchFilter } from '../../../../shared/account-transactions';

export interface ISummarizedAccountTransactionsSearchFilter extends IAccountTransactionsSearchFilter {
  summarizedForAccountExternalId: number;
}
