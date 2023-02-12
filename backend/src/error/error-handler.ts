import { Response, NextFunction } from 'express';

import { ErrorCustom } from './error-custom';
import { IRequest } from '../interfaces';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: ErrorCustom, req: IRequest, res: Response, _: NextFunction) => {
    res.status(err.status || 500).json({ error: err.message });
};
