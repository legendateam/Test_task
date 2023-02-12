import { NextFunction, Request, Response } from 'express';
import os from 'os';

import { convertBytesToMbUtil } from '../../utils';

class HealthController {
    public getFreeMemory(req: Request, res: Response, next: NextFunction): void {
        try {
            const freeMem = os.freemem();
            const formattedMemory = convertBytesToMbUtil(freeMem);

            res.json({
                freeMemory: formattedMemory,
            });
        } catch (e) {
            next(e);
        }
    }
}

export const healthController = new HealthController();
