import { Note } from "src/app/modules/note/note-entity";

export class PrismaNoteMapper {
  static toPrisma(note: Note) {
    return {
      id: note.id,
      title: note.title,
      content: note.content,
      userId: note.userId
    }
  }
}
