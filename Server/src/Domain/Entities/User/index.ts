import { Entity } from "../../../shared/interfaces/Entities/Entity";
import { IUserEntity } from "../../../shared/interfaces/Entities/IUserEntity";

export class UserEntity extends Entity<IUserEntity> {
  private constructor(props: IUserEntity, id?: string) {
    super(props, id);
  }

  static create(props: IUserEntity, id?: string): UserEntity {
    return new UserEntity(props, id);
  }

  get username() {
    return this.props.username;
  }
  get passhash() {
    return this.props.passhash;
  }
  get score() {
    return this.props.score;
  }
}
