import { type IUser } from '../../domain/interfaces/User';
import { type IUserRepository } from '../../domain/repositories/userRepository';

export class UserRepositoryInMemory implements IUserRepository {
  private readonly source: Array<IUser>;

  constructor() {
    this.source = new Array<IUser>();
  }

  create(user: IUser): Promise<void> {
    this.source.push(user);
    return Promise.resolve();
  }

  findOneByEmail(email: string): Promise<IUser | undefined> {
    const userFound = this.source.find((row) => row.email === email);
    return Promise.resolve(userFound);
  }
}
