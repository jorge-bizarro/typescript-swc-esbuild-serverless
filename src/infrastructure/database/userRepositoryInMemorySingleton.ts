import { type IUserRepository } from '../../domain/repositories/userRepository';
import { UserRepositoryInMemory } from './userRepositoryInMemory';

export class UserRepositoryInMemorySingleton {
  private static instance: IUserRepository;

  private constructor() {}

  static getInstance(): IUserRepository {
    if (!this.instance) {
      this.instance = new UserRepositoryInMemory();
    }
    return this.instance;
  }
}
