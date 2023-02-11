import { Router } from 'express';

export const authRouter = Router();

authRouter.post('/sign-up', (req, res) => {
    const { body } = req;

    body.greeting = 'hello from server';

    res.json(body);
});
