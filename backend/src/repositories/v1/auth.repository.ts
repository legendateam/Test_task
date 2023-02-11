import { Repository } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { User } from '../../dataBase/entities';

class AuthRepository {
    constructor(private readonly authRepository: Repository<User>) {}

    // public async createUser(data: any): Promise<any> {
    //     return this.authRepository.save(data);
    // }
    public async createUser(id: number, data: any): Promise<any> {
        return this.authRepository.update({ id }, data);
    }
}

export const authRepository = new AuthRepository(AppDataSource.getRepository(User));
