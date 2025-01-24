import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://127.0.0.1/nestjs_tutorial'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}