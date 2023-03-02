export interface IBilateralOperation {
  fromAccountExternalId: string;
  toAccountExternalId: string;
  sum: number;
  comment?: string;
}
