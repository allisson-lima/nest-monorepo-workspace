import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class DatabaseService {
  private readonly users: User[] = [
    { id: '1', name: 'Ana Silva', email: 'ana@example.com' },
    { id: '2', name: 'Bruno Costa', email: 'bruno@example.com' },
    { id: '3', name: 'Carla Dias', email: 'carla@example.com' },
  ];

  findAllUsers(): User[] {
    return this.users;
  }

  findUserById(id: string): User {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    return user;
  }
}
