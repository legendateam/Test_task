import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (req, res) => {
    res.json('hello form server');
});
