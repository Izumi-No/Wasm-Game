import { GetAllUsersUseCase } from '../../../Domain/UseCases/User/getAllUsers.usecase';
import { ok } from "../../../shared/interfaces/Presentation/HTTPResponse";
import { Controller } from "../../../shared/interfaces/Presentation/Controller";

export class GetAllUsersController implements Controller {
  constructor(private readonly GetAllUsersUseCase: GetAllUsersUseCase) {}

  async handle() {
    let users = await this.GetAllUsersUseCase.execute();
    return ok(users);
  }
}
