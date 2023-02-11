import { Router } from 'express';

import { authRouter } from './auth/auth.router';
import { healthRouter } from './health/health.router';

export const v1Router = Router();

v1Router.use('health', healthRouter);
v1Router.use('auth', authRouter);
