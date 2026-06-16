import { Controller, Get, Param, Query } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import { createApiResponse, PaginationDto } from '@app/shared';
import type { User } from '@app/database';

@Controller('users')
export class UsersController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  findAll(@Query('page') page = '1', @Query('limit') limit = '10') {
    const pagination = new PaginationDto(Number(page), Number(limit));
    const users = this.databaseService.findAllUsers();
    const start = (pagination.page - 1) * pagination.limit;
    const paginatedUsers = users.slice(start, start + pagination.limit);

    return createApiResponse<User[]>(paginatedUsers, pagination, users.length);
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.databaseService.findUserById(id);
  }
}
