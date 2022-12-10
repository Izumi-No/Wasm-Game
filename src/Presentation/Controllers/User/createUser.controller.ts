import { IUserEntity } from "./../../../shared/interfaces/Entities/IUserEntity";
import { CreateUserUseCase } from "./../../../Domain/UseCases/User/createUser.usecase";
import { ok } from "../../../shared/interfaces/Presentation/HTTPResponse";
import { Controller } from "./../../../shared/interfaces/Presentation/Controller";

export class CreateUserController implements Controller<IUserEntity> {
  constructor(private readonly CreateUserUseCase: CreateUserUseCase) {}

  async handle({ passhash, score, username }: IUserEntity) {
    let user = await this.CreateUserUseCase.execute({
      passhash,
      score,
      username,
    });
    return ok(user);
  }
}
