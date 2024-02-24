import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);
  app.useStaticAssets(join(__dirname, '..', 'public', 'ITMO_IS-3-year-WEB-frontend-main'));
  const DEFAULT_PORT = 700;
  await app.listen(configService.get<number>('PORT') || DEFAULT_PORT);
}
bootstrap();
