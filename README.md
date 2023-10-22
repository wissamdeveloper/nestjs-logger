# Custom Logger Middleware, Decorators, and Custom Winston Setup for Nest.js

This repository contains a custom logger middleware, decorators, and a sample Nest.js application demonstrating their usage. The middleware is designed to enhance the logging capabilities of your Nest.js application by providing execution time display and additional information like HTTP method, URL, and response status code. It leverages Nest.js decorators and middleware, along with a custom Winston logger setup.

## Custom Logger Decorator

### `custom-logger.decorator.ts`

The `custom-logger.decorator.ts` file defines a custom logger decorator that can be used to log function calls and their context. It is integrated with the Winston logger for enhanced log formatting.

#### How to Use

To use the `CustomLogger` decorator, simply apply it to your functions or methods like this:

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

```
### `ExecutionTimeMiddleware`

The repository also includes an `ExecutionTimeMiddleware` class that can be used as a Nest.js middleware to log request execution times.

#### How to Use

To use the `ExecutionTimeMiddleware`, you can add it to your Nest.js application:

```typescript
import { ExecutionTimeMiddleware } from './execution-time.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(ExecutionTimeMiddleware);
  await app.listen(3000);
}
```
## Installation and Setup
Clone this repository:

```bash
git clone https://github.com/yourusername/your-repo.git
```

Install the required dependencies:

```bash
cd nestjs_logger
```
```bash
npm install
```
Start the Nest.js application:

```bash
npm run start
```

The application will be accessible at http://localhost:3000.

## Contributing
If you find any issues or want to contribute to this project, please feel free to create a pull request or open an issue on GitHub.

## License
This project is licensed under the MIT License.
