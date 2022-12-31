import { HttpStatus, Injectable } from "@nestjs/common";
import { AppError } from "src/app/errors/AppError";
import { UserRepository } from "../../user/user-repository";
import { Note } from "../note-entity";
import { NoteRepository } from "../note-repository";

interface CreateNoteRequest {
  title: string;
  content: string;
  userId: string;
}

interface CreateNoteResponse {
  note: Note;
}

@Injectable()
export class CreateNote {
  constructor(private noteRepository: NoteRepository,
              private userRepository: UserRepository) {}

  public async execute(request: CreateNoteRequest): Promise<CreateNoteResponse> {
    const { title, content, userId } = request;

    const user = await this.userRepository.findById(userId);

    const userExists = !!user;

    if (!userExists) throw new AppError(HttpStatus.BAD_REQUEST, ["user not found"], "Bad request");

    const note = new Note({
      title,
      content,
      userId
    })

    await this.noteRepository.create(note);

    return {
      note
    }
  }
}