import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({ data });;
  }

  async getUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getUsersByDocument(document: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { document: { equals: document } } });
  }

  async getAllUsers(name?: string): Promise<User[] | boolean> {
    let users: User[];

    if (name) {
      users = await this.prisma.user.findMany({
        where: {
          name: {
            contains: name,
          },
        },
      });
      if (users.length === 0) {

       return false
      }
    } else {
      users = await this.prisma.user.findMany();
    }

    return users;
  }

  async updateUser(id: number, data: Partial<User>): Promise<User | null> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number): Promise<User | null> {
    return this.prisma.user.delete({ where: { id } });
  }
}
