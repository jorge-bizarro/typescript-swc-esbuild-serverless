import { type IUser } from '../interfaces/User';

export interface IUserRepository {
  create(user: IUser): Promise<void>;
  findOneByEmail(email: string): Promise<IUser | undefined>;
}
