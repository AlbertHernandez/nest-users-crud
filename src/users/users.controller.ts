import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  async findAll() {
    return [{ id: 1, name: "albert"}];
  }

  @Get(':id')
  async findById(@Param("id") id: string) {
    return {
      id,
      name: "albert"
    }
  }

  @Post()
  async createUser(@Body() createUserDto: any) {
    return createUserDto
  }

  @Patch(':id')
  async updateUser(@Body() updateUserDto: any, @Param("id") id: string) {
    return { id, updateUserDto }
  }

  @Delete(':id')
  async deleteById(@Param("id") id: string) {
    return {
      id,
    }
  }
}
