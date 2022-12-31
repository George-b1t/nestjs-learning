import { Injectable } from "@nestjs/common";
import { User } from "../user-entity";
import { UserRepository } from "../user-repository";

interface FindUserByIdRequest {
  userId: string;
}

interface FindUserByIdResponse {
  user: User;
}

@Injectable()
export class FindUserById {
  constructor(private userRepository: UserRepository) {}

  async execute(request: FindUserByIdRequest): Promise<FindUserByIdResponse> {
    const { userId } = request;

    const user = await this.userRepository.findById(userId);

    return {
      user
    }
  }
}
