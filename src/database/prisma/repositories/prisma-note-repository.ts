import { Injectable } from "@nestjs/common";

import { Note } from "src/app/modules/note/note-entity";
import { NoteRepository } from "src/app/modules/note/note-repository";

@Injectable()
export class PrismaNoteRepository extends NoteRepository {
  create(note: Note): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
