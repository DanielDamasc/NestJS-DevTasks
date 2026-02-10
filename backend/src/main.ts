import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para frontend fazer as requisições.
  app.enableCors({
    origin: 'http://localhost:5173', // Endereço do React
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
