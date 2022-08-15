import { Injectable, Logger, NotFoundException } from '@nestjs/common';

export class UsersService {
  private users = [{ name: 'albert', id: '1' }];
  private readonly logger = new Logger(UsersService.name);

  async findAll() {
    return this.users;
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User not found ${id}`);
    }

    return user;
  }

  async createUser(createUserDto: any) {
    this.logger.log('Creating user in the users service');
    return {};
  }

  async updateUser(updateUserDto: any, id: string) {
    return {};
  }

  async deleteById(id: string) {
    return {};
  }
}
