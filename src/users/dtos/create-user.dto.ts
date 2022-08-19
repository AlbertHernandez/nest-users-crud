import { IsInt, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsInt()
  @Min(0)
  age: number;
}
