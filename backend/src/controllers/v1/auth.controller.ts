import { Request, Response } from 'express';

class AuthController {
    public CreateUser(req: Request, res: Response): void {
        const { body } = req;
        body.greeting = 'hello from docker server';
        res.json(body);
    }
}

export const authController = new AuthController();
