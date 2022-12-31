import { Injectable } from "@nestjs/common";
import { AppError } from "src/app/errors/AppError";
import { UserRepository } from "../../user/user-repository";

interface LoginRequest {
  name: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

@Injectable()
export class LoginUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: LoginRequest): Promise<LoginResponse> {
    const { name, password } = request;
  
    const user = await this.userRepository.findByName(name);

    if (!user) throw new AppError("user not found");

    if (!user.checkPassword(password)) throw new AppError("invalid password");

    return {
      token: user.generateToken()
    }
  }
}
