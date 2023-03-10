import { IsNotEmpty, Length, IsOptional, IsString } from "class-validator";

export class CreateUserBody {
  @IsNotEmpty()
  @Length(2, 30)
  @IsString()
  name: string;

  @IsNotEmpty()
  @Length(8, 30)
  @IsString()
  password: string;

  @IsOptional()
  @Length(10, 240)
  @IsString()
  about?: string;
}
