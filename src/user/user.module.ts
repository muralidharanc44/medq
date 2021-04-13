import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: userSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
