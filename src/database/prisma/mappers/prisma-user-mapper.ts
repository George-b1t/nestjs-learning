import { User } from "src/app/modules/user/user-entity";

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      about: user.about
    }
  }
}
