import { Controller, Post, Body } from "@nestjs/common";
import { CreateNoteBody } from "./dtos/create-note-body";
import { CreateNote } from "./use-cases/create-note";

@Controller("notes")
export class NoteController {
  constructor(private createNote: CreateNote) {}

  @Post("create")
  async create(@Body() body: CreateNoteBody) {
    const { title, content, userId } = body;

    const { note } = await this.createNote.execute({
      title,
      content,
      userId
    });

    return {
      note
    }
  }
}
