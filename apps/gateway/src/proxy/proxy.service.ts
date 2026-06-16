import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import type { ApiResponse } from '@app/shared';

@Injectable()
export class ProxyService {
  private readonly apiUrl = process.env.API_URL ?? 'http://localhost:3000';

  constructor(private readonly httpService: HttpService) {}

  async getUsers(page = '1', limit = '10'): Promise<ApiResponse<unknown>> {
    const { data } = await firstValueFrom(
      this.httpService.get<ApiResponse<unknown>>(
        `${this.apiUrl}/users?page=${page}&limit=${limit}`,
      ),
    );

    return data;
  }
}
