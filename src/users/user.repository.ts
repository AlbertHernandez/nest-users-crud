import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

export const USER_REPOSITORY = 'UserRepository';

export interface UserRepository {
  findAll(): Promise<User[]>;
  createUser(createUserDto: CreateUserDto): Promise<User>;
}
