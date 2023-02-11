import { Request, Response } from 'express';
import os from 'os';

import { convertBytesToMbUtil } from '../../utils';

class HealthController {
    public getFreeMemory(req: Request, res: Response): void {
        const freeMem = os.freemem();
        const formattedMemory = convertBytesToMbUtil(freeMem);

        res.json({
            freeMemory: formattedMemory,
        });
    }
}

export const healthController = new HealthController();
