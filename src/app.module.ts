import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { LoggerModule } from 'nestjs-pino';
import {
  CORRELATION_ID_KEY,
  CorrelationIdMiddleware,
} from './correlation-id.middleware';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './config/config-loader';
import { envSchema } from './config/env-schema';
import { loggerOptions } from './logger/logger-options';
import { configOptions } from './config/config-options';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    LoggerModule.forRoot(loggerOptions),
    ConfigModule.forRoot(configOptions),
    AuthModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*');
  }
}
