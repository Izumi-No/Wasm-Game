import { IUserRepository } from './../../../shared/interfaces/Repository/IUserRepository';
import { IcreationUseCase } from './../creationUseCase';
import { IUserEntity } from '../../../shared/interfaces/Entities/IUserEntity';
import { UserEntity } from './../../Entities/User/index';

export class CreateUserUseCase implements IcreationUseCase<IUserEntity, UserEntity>{
    constructor(private readonly UserRepository: IUserRepository){}

    async execute(data: IUserEntity, id?: string): Promise<UserEntity>{
        let user = UserEntity.create(data,id)
        return await this.UserRepository.save(user)
    }
    
}