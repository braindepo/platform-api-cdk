export interface INewUser {
  username: string;
  roleId: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  creatorId?: number;
}
