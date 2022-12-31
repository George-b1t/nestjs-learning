import { randomUUID } from "crypto";

interface NoteProps {
  title: string;
  content: string;
}

export class Note {
  private _id: string;
  private props: NoteProps;

  constructor(props: NoteProps) {
    this._id = randomUUID();
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this.props.title;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get content(): string {
    return this.props.content;
  }

  public set content(content: string) {
    this.props.content = content;
  }
}