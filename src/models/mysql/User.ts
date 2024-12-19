export interface IUser {
  email: string;
  password: string;
  isApproved: boolean;
  createdAt?: Date;
  id?: string;
}
