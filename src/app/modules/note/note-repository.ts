import { Note } from "./note-entity";

export abstract class NoteRepository {
  abstract create(note: Note): Promise<void>;
}