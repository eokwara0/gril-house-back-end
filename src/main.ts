import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Grill-house-backend')
  .setDescription('Grill House API Documentation')
  .setVersion('1.0')
  .addTag('Grill House Swagger Documentation')
  .build();

  const document  = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api' , app , document);


  await app.listen(3000);
}
bootstrap();
