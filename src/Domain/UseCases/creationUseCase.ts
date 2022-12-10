

export interface IcreationUseCase<T, A>{
    execute(data: T, id?:string): Promise<A>
}