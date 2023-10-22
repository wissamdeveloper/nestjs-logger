import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class ExecutionTimeMiddleware implements NestMiddleware {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  use(req: Request, res: Response, next: NextFunction) {
    const start = new Date().getTime();

    res.on('finish', () => {
      const duration = new Date().getTime() - start;
      const logMessage = `Request: ${req.method} ${req.url} - Status Code: ${res.statusCode} - ${duration}ms`;

      this.logger.warn(logMessage);
    });

    next();
  }
}
