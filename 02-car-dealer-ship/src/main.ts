import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from "@nestjs/common";
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Si esta bandera esta en true,
      // se ignoran las propiedades que
      // no forman parte del DTO asociado
      // a las diferentes rutas del controller, NO MUESTRA ERROR AL CLIENTE
      forbidNonWhitelisted: true // Si esta bandera esta en true
      //   valida que unicamente se envien las propiedades del DTO asociado
      //   a las diferentes rutas del controller, MUESTRA UN ERROR AL CLIENTE.

      //   Existen mas configuraciones que se pueden agregar.
      //   Consultar en la documentacion si se desea agregar mas cosas.
      //   Esta es una configuarcion base
    })
  )

  await app.listen(3000);
}

bootstrap();
