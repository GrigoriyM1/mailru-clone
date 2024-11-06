import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { FilesModule } from './files/files.module';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    AuthModule, 
    UserModule, 
    QuestionModule, 
    AnswerModule, 
    FilesModule, 
    GatewayModule
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
