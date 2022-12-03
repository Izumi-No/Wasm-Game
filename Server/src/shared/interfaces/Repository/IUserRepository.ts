import { UserEntity } from './../../../Domain/Entities/User/index';

export interface IUserRepository{
    save(data: UserEntity): Promise<UserEntity>
    getAll(): Promise<UserEntity[]>
    getByUsername(username: string): Promise<UserEntity>
    update(data: Partial<Omit<UserEntity, "id">>, username: string): Promise<UserEntity>
    deleteByUsername(username: string): Promise<void>
}