import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';
import { CommandModule } from './commands/command.module';
import * as process from 'process';
import { config } from "dotenv";
config();


async function bootstrap() {
  console.log('poooooort',process.env.PORT);
  const app = await NestFactory.create(AppModule);
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