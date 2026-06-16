import { ApiResponse } from '../interfaces/api-response.interface';
import { PaginationDto } from '../dto/pagination.dto';

export function createApiResponse<T>(
  data: T,
  pagination: PaginationDto,
  total: number,
): ApiResponse<T> {
  return {
    data,
    meta: {
      page: pagination.page,
      limit: pagination.limit,
      total,
    },
  };
}
