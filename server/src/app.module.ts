import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule], // ConfigModule.forRoot()  -  для env 
  // controllers: [],
  // providers: [],
})
export class AppModule {}
