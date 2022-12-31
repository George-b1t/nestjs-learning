import { randomUUID } from "crypto";

interface UserProps {
  name: string;
  about?: string;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps) {
    this._id = randomUUID();
    this.props = props;
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

  public get about(): string | null {
    return this.props.about;
  }

  public set about(about: string | null) {
    this.props.about = about;
  }
}