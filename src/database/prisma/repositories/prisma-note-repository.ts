import { Injectable } from "@nestjs/common";

import { Note } from "src/app/modules/note/note-entity";
import { NoteRepository } from "src/app/modules/note/note-repository";
import { PrismaNoteMapper } from "../mappers/prisma-note-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNoteRepository implements NoteRepository {
  constructor(private prismaService: PrismaService) {}

  async create(note: Note): Promise<void> {
    const raw = PrismaNoteMapper.toPrisma(note);

    await this.prismaService.note.create({
      data: raw
    });
  }
}
