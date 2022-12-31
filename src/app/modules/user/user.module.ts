import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { PrismaUserRepository } from "src/database/prisma/repositories/prisma-user-repository";
import { CreateUser } from "./use-cases/create-user";
import { UserRepository } from "./user-repository";
import { UserController } from "./user.controller";

@Module({
  controllers: [UserController],
  providers: [PrismaService,
    CreateUser,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    }
  ],
  exports: [UserRepository]
})

export class UserModule {}
