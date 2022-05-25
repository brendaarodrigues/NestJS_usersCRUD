import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
