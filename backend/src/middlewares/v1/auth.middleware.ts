import { NextFunction, Response } from 'express';

import { IUserDto } from '../../interfaces/dto';
import { IRequest } from '../../interfaces';
import { ErrorCustom } from '../../error';
import { HttpStatusEnum } from '../../enums';
import { errorConstant } from '../../constants';

class AuthMiddleware {
    public checkUser(req: IRequest, _: Response, next: NextFunction): void {
        try {
            const { body } = req;

            if (!body.password || !body.email || !body.name) {
                next(new ErrorCustom(errorConstant.badRequest, HttpStatusEnum.BAD_REQUEST));
                return;
            }

            req.user = body as IUserDto;

            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();
