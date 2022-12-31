import { Module } from "@nestjs/common";

import { PrismaService } from "./prisma/prisma.service";

import { PrismaNoteRepository } from "./prisma/repositories/prisma-note-repository";
import { PrismaUserRepository } from "./prisma/repositories/prisma-user-repository";

@Module({
  providers: [
    PrismaService,
    PrismaUserRepository,
    PrismaNoteRepository
  ]
})

export class DatabaseModule {}
