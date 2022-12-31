import { Injectable } from "@nestjs/common";

import { User } from "src/app/modules/user/user-entity";
import { UserRepository } from "src/app/modules/user/user-repository";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}
  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prismaService.user.create({
      data: raw
    });
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) return null;

    const raw = PrismaUserMapper.fromPrisma(user);

    return raw;
  }

  async findByName(name: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        name
      }
    });

    if (!user) return null;

    const raw = PrismaUserMapper.fromPrisma(user);

    return raw;
  }
}
