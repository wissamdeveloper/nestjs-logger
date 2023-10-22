# NestJS Logger

A custom logger for your NestJS application using Winston.

## Introduction

This project provides a custom logger for NestJS applications. It is built on top of [Winston](https://github.com/winstonjs/winston), a versatile logging library for Node.js. The logger is designed to help you easily log information, errors, class name, function name and execution times for different parts of your NestJS application in a clean look.

## Custom Logger

In your NestJS application, you can use the `@CustomLogger()` decorator to add logging capabilities to your functions. It will log when a function is called, along with the context and function name.

```typescript
import { CustomLogger } from './logger/custom-logger.decorator';

@Controller()
export class AppController {
  @Get()
  @CustomLogger()
  getHello(): string {
    // Your code here
  }
}

Middleware
The project includes a middleware (ExecutionTimeMiddleware) that logs the execution time of incoming requests. This can be useful for monitoring and performance analysis.


import { ExecutionTimeMiddleware } from './middleware/execution-time.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(ExecutionTimeMiddleware);
  // Your code here
}

Usage
Install the required packages:

npm install winston nest-winston @types/winston

Create your logger using the provided decorators and middleware. See the examples in the code.

Customize the logger and log formats as per your requirements.

Run your NestJS application.

Installation
Clone the repository:

git clone https://github.com/wissamdeveloper/nestjs-logger

Install the project dependencies:

npm install

Configure the logger and middleware as needed for your application.
Run your NestJS application:

npm start

License
This project is licensed under the MIT License - see the LICENSE file for details.
