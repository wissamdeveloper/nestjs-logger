import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { CustomLogger } from './logger/custom-logger.decorator';
import { Logger } from 'winston';

@Injectable()
export class AppService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  @CustomLogger()
  getHelloo(): string {
    this.logger.error('error while executing getHelloo from AppService');
    return 'Hello World!';
  }
}
