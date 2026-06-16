export class PaginationDto {
  page: number;
  limit: number;

  constructor(page = 1, limit = 10) {
    this.page = page;
    this.limit = limit;
  }
}
