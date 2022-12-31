import { IsNotEmpty, Length, IsString, IsUUID } from "class-validator";

export class CreateNoteBody {
  @IsNotEmpty()
  @Length(2, 30)
  @IsString()
  title: string;

  @IsNotEmpty()
  @Length(10, 240)
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
