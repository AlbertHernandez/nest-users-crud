import { Injectable, NotFoundException } from '@nestjs/common';

export class UsersService {
  private users = [{ name: 'albert', id: '1' }];

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
    return {};
  }

  async updateUser(updateUserDto: any, id: string) {
    return {};
  }

  async deleteById(id: string) {
    return {};
  }
}
