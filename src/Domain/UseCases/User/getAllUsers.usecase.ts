import { IUserRepository } from "../../../shared/interfaces/Repository/IUserRepository";
import { UserEntity } from "../../Entities/User/index";

export class GetAllUsersUseCase {
  constructor(private readonly UserRepository: IUserRepository) {}

  async execute(): Promise<UserEntity[]> {
    return await this.UserRepository.getAll();
  }
}
