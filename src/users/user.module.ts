import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserSchema } from './schemas/user.schema';
import { UserMongoRepository } from './user-mongo.repository';
import { USER_REPOSITORY } from './user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UsersService,
    {
      provide: USER_REPOSITORY,
      useClass: UserMongoRepository,
    },
  ],
  controllers: [UsersController],
})
export class UserModule {}
