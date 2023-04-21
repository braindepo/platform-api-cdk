export interface IProfileVerificationResult {
  userId: number;
  isVerified: boolean;
  rejectionReason?: string;
}
