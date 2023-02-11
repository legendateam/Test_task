import { Request, Response } from 'express';

import { authRepository } from '../../repositories/v1';

class AuthController {
    public async CreateUser(req: Request, res: Response): Promise<void> {
        try {
            const { body } = req;

            const newVar = await authRepository.createUser(body.id, body);

            res.json(newVar);
        } catch (e) {
            console.log(e);
        }
    }
}

export const authController = new AuthController();
