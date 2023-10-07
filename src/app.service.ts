import { Inject, Injectable, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { CustomLogger } from './logger/custom-logger.decorator';

@Injectable()
export class AppService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  @CustomLogger()
  getHello(): string {
    this.logger.error('error while executing getHello from AppService');
    return 'Hello World!';
  }
}
