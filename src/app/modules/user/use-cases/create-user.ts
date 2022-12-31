import { Injectable } from "@nestjs/common";
import { User } from "../user-entity";
import { UserRepository } from "../user-repository";

interface CreateUserRequest {
  name: string;
  password: string;
  about?: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, password, about } = request;

    const user = new User({
      name,
      about,
      password
    });

    await this.userRepository.create(user);

    return {
      user
    }
  }
}