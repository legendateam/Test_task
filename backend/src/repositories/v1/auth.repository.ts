import {ObjectLiteral, Repository} from "typeorm";

import {AppDataSource} from "../../data-source";
import {User} from "../../dataBase/entities";

class AuthRepository {
    constructor(private readonly authRepository: Repository<ObjectLiteral>) {
    }

    public async createUser(data: any): Promise<any> {
        return this.authRepository.save(data);
    }
}

export const authRepository = new AuthRepository(AppDataSource.getRepository(User));
