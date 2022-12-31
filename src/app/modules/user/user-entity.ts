import { randomUUID } from "crypto";
import { compare, hashSync } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface UserProps {
  name: string;
  password: string;
  about?: string;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, userId?: string) {
    this._id = userId ?? randomUUID();
    this.props = {
      ...props,
      password: hashSync(props.password, 8)
    };
  }

  public async checkPassword(password: string): Promise<boolean> {
    return await compare(password, this.props.password);
  }

  public generateToken(): string {
    return sign({ id: this._id }, process.env.SECRET_USER_TOKEN, { expiresIn: "1h"});
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get password(): string {
    return this.props.password;
  }

  public get about(): string | null {
    return this.props.about;
  }

  public set about(about: string | null) {
    this.props.about = about;
  }
}