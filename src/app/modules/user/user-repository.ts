import { User } from "./user-entity";

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
}
