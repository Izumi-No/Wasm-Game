import { GetAllUsersController } from "../../../../Presentation/Controllers/User/getAllUsers.controller";
import { GetAllUsersUseCase } from "../../../../Domain/UseCases/User/getAllUsers.usecase";
import { LevelUserRepository } from "../../../Persistence/LevelDB/Repos/User.repo";
export function GetAllUsersControllerFactory(): GetAllUsersController {
  let LevelUserRepositoryInstance = new LevelUserRepository();
  let GetAllUsersUseCaseInstance = new GetAllUsersUseCase(
    LevelUserRepositoryInstance
  );
  return new GetAllUsersController(GetAllUsersUseCaseInstance);
}
