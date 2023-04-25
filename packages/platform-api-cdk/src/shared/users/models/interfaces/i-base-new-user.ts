export interface IBaseNewUser {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  emailVerificationUrlPattern?: string;
  suppressInstantEmailVerification?: boolean;
}
