import { Router } from 'express';

import {authController} from "../../../controllers/v1";

export const authRouter = Router();

authRouter.post('/sign-up', authController.CreateUser);
