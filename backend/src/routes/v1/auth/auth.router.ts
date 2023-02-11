import { Router } from 'express';

import { authController } from '../../../controllers/v1';
import {authMiddleware} from "../../../middlewares/v1";

export const authRouter = Router();

authRouter.post('/sign-up', authMiddleware.checkUser, authController.createUser);
