import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

export const CORRELATION_ID_KEY = 'X-Correlation-Id';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const correlationHeader = req.header(CORRELATION_ID_KEY) || randomUUID();
    req.headers[CORRELATION_ID_KEY] = correlationHeader;
    res.set(CORRELATION_ID_KEY, correlationHeader);

    next();
  }
}
