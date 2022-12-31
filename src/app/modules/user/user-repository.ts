import { User } from "./user-entity";

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(userId: string): Promise<User | null>;
  abstract findByName(name: string): Promise<User | null>;
}
