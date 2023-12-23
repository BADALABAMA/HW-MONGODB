import { UserType } from '../enums/UserType';

export interface IUser {
  getId(): string;
  getEmail(): string;
  getPassword(): string;
  getUserType(): UserType;
}
