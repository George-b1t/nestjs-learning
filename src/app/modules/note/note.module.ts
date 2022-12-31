import { Module } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import { PrismaNoteRepository } from "src/database/prisma/repositories/prisma-note-repository";
import { PrismaUserRepository } from "src/database/prisma/repositories/prisma-user-repository";
import { UserRepository } from "../user/user-repository";
import { NoteRepository } from "./note-repository";
import { NoteController } from "./note.controller";
import { CreateNote } from "./use-cases/create-note";

@Module({
  controllers: [NoteController],
  providers: [PrismaService,
    CreateNote,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: NoteRepository,
      useClass: PrismaNoteRepository,
    }
  ],
  exports: [UserRepository, NoteRepository]
})

export class NoteModule {}
