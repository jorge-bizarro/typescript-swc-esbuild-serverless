import { type IUser } from '../../domain/interfaces/User';
import { type IUserRepository } from '../../domain/repositories/userRepository';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(newUser: IUser): Promise<void> {
    await this.userRepository.create(newUser);
  }
}
