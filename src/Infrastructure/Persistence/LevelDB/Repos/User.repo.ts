import { usersSubLevel } from "./../SubLevels/usersSubLevel";
import { IUserRepository } from "./../../../../shared/interfaces/Repository/IUserRepository";
import { UserEntity } from "../../../../Domain/Entities/User";

export class LevelUserRepository implements IUserRepository {
  async save(data: UserEntity) {
    if ((await usersSubLevel.keys().all()).includes(data.username)) {
      throw Error("User already exists");
    }

    await usersSubLevel.put(data.username, JSON.stringify(data));
    return data;
  }
  async getAll() {
    let users = await usersSubLevel.iterator().all();

    return users.map(function ([_, value]): UserEntity {
      return JSON.parse(value);
    });
  }
  async getByUsername(username: string) {
    let stringUser = await usersSubLevel.get(username);
    let user: UserEntity = JSON.parse(stringUser);
    return user;
  }
  async update(data: Partial<Omit<UserEntity, "id">>, username: string) {
    let stringUser = await usersSubLevel.get(username);
    let user: Omit<UserEntity, "id"> = JSON.parse(stringUser);
    let updatedUser = UserEntity.create({ ...user, ...data }, username);
    await usersSubLevel.put(username, JSON.stringify(updatedUser));
    return updatedUser;
  }
  async deleteByUsername(username: string) {
    await usersSubLevel.del(username);
  }
}
