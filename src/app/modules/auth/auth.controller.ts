import { Controller, Post, Body } from "@nestjs/common";
import { LoginUserBody } from "./dtos/login-user-body";
import { LoginUser } from "./use-cases/login-user";

@Controller("auth")
export class AuthController {
  constructor(private loginUser: LoginUser) {}

  @Post("login")
  async login(@Body() body: LoginUserBody) {
    const { name, password } = body;

    const { token } = await this.loginUser.execute({
      name,
      password
    });

    return {
      token
    }
  }
}