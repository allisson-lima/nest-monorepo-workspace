import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  const port = Number(process.env.GATEWAY_PORT ?? 3001);
  await app.listen(port);
  console.log(`Gateway running on http://localhost:${port}`);
}
void bootstrap();
