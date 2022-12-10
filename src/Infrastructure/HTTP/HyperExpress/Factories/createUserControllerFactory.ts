import { LevelUserRepository } from "./../../../Persistence/LevelDB/Repos/User.repo";
import { CreateUserUseCase } from "./../../../../Domain/UseCases/User/createUser.usecase";
import { CreateUserController } from "./../../../../Presentation/Controllers/User/createUser.controller";
export function createUserControllerFactory(): CreateUserController {
  let LevelUserRepositoryInstance = new LevelUserRepository();
  let CreateUserUseCaseInstance = new CreateUserUseCase(
    LevelUserRepositoryInstance
  );
  return new CreateUserController(CreateUserUseCaseInstance);
}
