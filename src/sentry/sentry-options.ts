import { ConfigModule, ConfigService } from '@nestjs/config';

export const sentryOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    const sentryConfig = configService.get('sentry');
    const environment = configService.get('environment');

    return {
      enabled: sentryConfig.enabled,
      dsn: sentryConfig.dsn,
      environment,
      serverName: 'users-service',
    };
  },
  inject: [ConfigService],
};
