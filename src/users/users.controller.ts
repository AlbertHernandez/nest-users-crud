import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.usersService.findById(id);
  }

  @Post()
  async createUser(@Body() createUserDto: any) {
    return await this.usersService.createUser(createUserDto);
  }

  @Patch(':id')
  async updateUser(@Body() updateUserDto: any, @Param('id') id: string) {
    return await this.usersService.updateUser(updateUserDto, id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.usersService.deleteById(id);
  }
}
