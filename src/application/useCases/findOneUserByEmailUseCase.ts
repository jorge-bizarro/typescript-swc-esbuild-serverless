import { type IUser } from '../../domain/interfaces/User';
import { type IUserRepository } from '../../domain/repositories/userRepository';

export class FindOneUserByEmailUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(email: string): Promise<IUser | undefined> {
    const userFound = await this.userRepository.findOneByEmail(email);
    return userFound;
  }
}
