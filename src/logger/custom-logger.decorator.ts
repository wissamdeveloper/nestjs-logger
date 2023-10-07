// custom-logger.decorator.ts

import { Logger } from '@nestjs/common';

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
      Logger.warn(`[${context}] [${functionName}] Function called.`);
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
