// custom-logger.decorator.ts

import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm',
        }),
        winston.format.printf(({ level, message, timestamp }) => {
          return `${timestamp} ${level}: ${message} `;
        }),
      ),
    }),
  ],
});

const CONTEXT_METADATA_KEY = '__custom_logger_context__';

export function CustomLogger() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    const context =
      Reflect.getMetadata(CONTEXT_METADATA_KEY, target.constructor) ||
      target.constructor.name;

    descriptor.value = function (...args: any[]) {
      const functionName = propertyKey;
      logger.warn(`[${context}] [${functionName}] Function called.`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

export function SetContext(context: string) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (target: Function) {
    Reflect.defineMetadata(CONTEXT_METADATA_KEY, context, target);
  };
}
