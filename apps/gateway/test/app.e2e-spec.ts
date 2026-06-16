import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { GatewayModule } from './../src/gateway.module';
import { ProxyService } from './../src/proxy/proxy.service';

describe('ProxyController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GatewayModule],
    })
      .overrideProvider(ProxyService)
      .useValue({
        getUsers: () =>
          Promise.resolve({
            data: [{ id: '1', name: 'Ana Silva', email: 'ana@example.com' }],
            meta: { page: 1, limit: 10, total: 1 },
          }),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(
        (response: { body: { data: unknown[]; meta: { total: number } } }) => {
          expect(response.body.data).toHaveLength(1);
          expect(response.body.meta.total).toBe(1);
        },
      );
  });
});
