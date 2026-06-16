import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/database';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
})
export class UsersModule {}
