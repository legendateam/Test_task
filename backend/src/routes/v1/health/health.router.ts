import { Router } from 'express';

import { healthController } from '../../../controllers/v1';

export const healthRouter = Router();

healthRouter.get('/', healthController.getFreeMemory);
