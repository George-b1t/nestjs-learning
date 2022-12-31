import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { PrismaUserRepository } from "src/database/prisma/repositories/prisma-user-repository";
import { UserRepository } from "../user/user-repository";
import { AuthController } from "./auth.controller";
import { LoginUser } from "./use-cases/login-user";
import { LoginUserMiddleware } from "./use-cases/login-user-middleware";

@Module({
  controllers: [AuthController],
  providers: [PrismaService,
    LoginUser,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserRepository]
})

export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoginUserMiddleware)
      .exclude(
        { path: "auth/login", method: RequestMethod.POST },
        { path: "users/create", method: RequestMethod.POST },
      )
      .forRoutes("*")
  }
}
