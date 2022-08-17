import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';
import { Handlers } from '@sentry/node';

@Injectable()
export class SentryMiddleware implements NestMiddleware {
  constructor(@InjectSentry() private readonly sentryService: SentryService) {}
  use(req: Request, res: Response, next: NextFunction): void {
    this.sentryService
      .instance()
      .getCurrentHub()
      .configureScope((scope) => {
        scope.addEventProcessor((event) => {
          return Handlers.parseRequest(event, req);
        });
      });

    next();
  }
}
