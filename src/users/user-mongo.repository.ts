import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserDocument, UserModel } from './schemas/user.schema';
import { LeanDocument } from 'mongoose';
import { UserRepository } from './user.repository';

@Injectable()
export class UserMongoRepository implements UserRepository {
  constructor(@InjectModel(User.name) private userModel: UserModel) {}

  async findAll() {
    const users = await this.userModel.find().lean();
    return users.map((user) => this.mapToUser(user));
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = await new this.userModel(createUserDto).save();

    return this.mapToUser(userCreated);
  }

  private mapToUser(rawUser: LeanDocument<UserDocument>): User {
    const user = new User();

    user.id = rawUser.id;
    user.email = rawUser.email;
    user.age = rawUser.age;
    user.createdAt = rawUser.createdAt;
    user.updatedAt = rawUser.updatedAt;

    return user;
  }
}
