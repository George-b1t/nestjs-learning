import { Controller, Post, Body } from "@nestjs/common";

import { CreateUserBody } from "./dtos/create-user-body";
import { CreateUser } from "./use-cases/create-user";

@Controller("users")
export class UserController {
  constructor(private createUser: CreateUser) {}

  @Post("create")
  async create(@Body() body: CreateUserBody) {
    const { name, about } = body;

    const { user } = await this.createUser.execute({
      name,
      about
    });

    return {
      user
    }
  }
}
