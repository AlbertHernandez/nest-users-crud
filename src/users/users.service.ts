import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { USER_REPOSITORY, UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  private users = [{ name: 'albert', id: '1' }];
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
  ) {}

  async findAll() {
    return this.userRepository.findAll();
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User not found ${id}`);
    }

    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    this.logger.log('Creating user in the users service');
    return await this.userRepository.createUser(createUserDto);
  }

  async updateUser(updateUserDto: any, id: string) {
    return {};
  }

  async deleteById(id: string) {
    return {};
  }
}
