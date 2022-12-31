import { IsNotEmpty, Length, IsString, IsUUID } from "class-validator";

export class LoginUserBody {
  @IsNotEmpty()
  @Length(2, 30)
  @IsString()
  name: string;

  @IsNotEmpty()
  @Length(8, 30)
  @IsString()
  password: string;
}
