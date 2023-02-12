import { NextFunction, Response } from 'express';

import { authRepository } from '../../repositories/v1';
import { IRequest } from '../../interfaces';
import { IUserDto } from '../../interfaces/dto';
import { encryptionService, hashService } from '../../services';

class AuthController {
    public async createUser(req: IRequest, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name, password, email } = req.user as IUserDto;

            const hashedPassword = await hashService.hash(password);
            const cipheredPassword = encryptionService.encrypter(hashedPassword, 16);

            const newVar = await authRepository.createUser({ name, password: cipheredPassword, email });

            res.json(newVar);
        } catch (e) {
            next(e);
        }
    }
}

export const authController = new AuthController();
