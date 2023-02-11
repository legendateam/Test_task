import { Request, Response } from 'express';
import os from 'os';

class HealthController {
    public getFreeMemory(req: Request, res: Response): void {

        const formatMemoryUsage = (data: number) => `${Math.round(data / 1024 / 1024)} MB`;

        res.json({
            freeMemory: formatMemoryUsage(os.freemem())
        });
    }
}

export const healthController = new HealthController();
