import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(cookieParser()); 
	app.setGlobalPrefix('api')
	app.enableCors({
		origin: [process.env.CLIENT_URL], // http://localhost:3000
		credentials: true,
		exposedHeaders: 'set-cookie',
	});

	app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

	// swagger
	const config = new DocumentBuilder()
		.setTitle('Mailru clone example')
		.setDescription('Тесты api проекта')
		.setVersion('1.0')
		.addTag('mailru')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	await app.listen(process.env.PORT! || 4200);
}
bootstrap();

