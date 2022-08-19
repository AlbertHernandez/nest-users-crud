import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { LoggerModule } from 'nestjs-pino';
import { CorrelationIdMiddleware } from './correlation-id.middleware';
import { ConfigModule } from '@nestjs/config';
import { loggerOptions } from './logger/logger-options';
import { configOptions } from './config/config-options';
import { AuthModule } from './auth/auth.module';
import { SentryInterceptor, SentryModule } from '@ntegral/nestjs-sentry';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SentryMiddleware } from './sentry.middleware';
import { sentryOptions } from './sentry/sentry-options';
import { sentryInterceptorOptions } from './sentry/sentry-interceptor-options';

@Module({
  imports: [
    LoggerModule.forRoot(loggerOptions),
    ConfigModule.forRoot(configOptions),
    AuthModule,
    SentryModule.forRootAsync(sentryOptions),
  ],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    UsersService,
    ConfigModule,
    {
      provide: APP_INTERCEPTOR,
      useValue: new SentryInterceptor(sentryInterceptorOptions),
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware, SentryMiddleware).forRoutes('*');
  }
}
