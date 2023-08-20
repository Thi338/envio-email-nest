import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user/create-user.controller';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [CreateUserController],
  providers: [],
})
export class AppModule {}
