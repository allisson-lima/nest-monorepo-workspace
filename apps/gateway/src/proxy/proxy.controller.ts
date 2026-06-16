import { Controller, Get, Query } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Controller('users')
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Get()
  findAll(@Query('page') page = '1', @Query('limit') limit = '10') {
    return this.proxyService.getUsers(page, limit);
  }
}
