import { randomUUID } from "node:crypto";

export abstract class Entity<T> {
  private readonly _id: string;
  public readonly props: T;

  constructor(props: T, id?: string) {
    this._id = id || randomUUID();
    this.props = props;
  }

  get id(): string {
    return this._id;
  }
}
