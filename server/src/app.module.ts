import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, QuestionModule, AnswerModule], // ConfigModule.forRoot()  -  для env 
  // controllers: [],
  // providers: [],
})
export class AppModule {}
