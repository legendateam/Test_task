import {Response, NextFunction} from "express";

import {IUserDto} from "../../interfaces/dto";
import {IRequest} from "../../interfaces";

class AuthMiddleware {
    public checkUser(req: IRequest, _: Response, next: NextFunction): void {
        try {
            const { body } = req;

            if (body.password && body.email && body.name) {
                throw new Error('data invalid');
            }

            req.user = body as IUserDto;

            next();
        } catch (e) {
            console.log(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();
