import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { ApiModule } from './../src/api.module';

describe('UsersController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

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
          expect(response.body.data).toHaveLength(3);
          expect(response.body.meta.total).toBe(3);
        },
      );
  });

  it('/users/:id (GET)', () => {
    return request(app.getHttpServer()).get('/users/1').expect(200).expect({
      id: '1',
      name: 'Ana Silva',
      email: 'ana@example.com',
    });
  });
});
