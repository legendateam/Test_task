import { Repository } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { User } from '../../dataBase/entities';
import { IUserDto } from '../../interfaces/dto';

class AuthRepository {
    constructor(private readonly authRepository: Repository<User>) {}

    public async createUser(data: IUserDto): Promise<User> {
        return this.authRepository.save(data);
    }
}

export const authRepository = new AuthRepository(AppDataSource.getRepository(User));
