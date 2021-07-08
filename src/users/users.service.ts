import { Injectable } from '@nestjs/common';
export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'zura',
      username: 'papiashvili',
      password: 'sosecure',
    },
    {
      id: 2,
      name: 'Jane',
      username: 'Snake',
      password: 'snake',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.users.find((user) => user.username === username);
    return user;
  }
}
