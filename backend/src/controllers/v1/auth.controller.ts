import { Response } from 'express';

import { authRepository } from '../../repositories/v1';
import {IRequest} from "../../interfaces";
import {IUserDto} from "../../interfaces/dto";

class AuthController {
    public async CreateUser(req: IRequest, res: Response): Promise<void> {
        try {
            const { name, password, email } = req.user as IUserDto;

            const newVar = await authRepository.createUser({ name, password, email });

            res.json(newVar);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export const authController = new AuthController();
