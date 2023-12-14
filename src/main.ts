import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CommandFactory } from 'nest-commander';
import { CommandModule } from './commands/command.module';
import * as process from 'process';
import { config } from 'dotenv';
import { join } from 'path';
config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('ejs');
  await app.listen(process.env.PORT);
}
async function bootstrapCmd() {
  await CommandFactory.run(CommandModule, ['warn', 'error', 'debug', 'log']);
}
if (process.env.MODE === 'cmd') {
  bootstrapCmd();
} else {
  bootstrap();
}