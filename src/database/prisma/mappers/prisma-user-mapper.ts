import { User as PrismaUser } from "@prisma/client";
import { User } from "src/app/modules/user/user-entity";

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      about: user.about
    }
  }

  static fromPrisma(prismaUser: PrismaUser) {
    const user = new User({
      name: prismaUser.name,
      about: prismaUser.about
    }, prismaUser.id);

    return user;
  }
}
