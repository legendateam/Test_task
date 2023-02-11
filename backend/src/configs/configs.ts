import { NodeEnvEnum } from '../enums';

export const configs = {
    PORT: process.env.PORT || 2000,
    NODE_ENV: process.env.NODE_ENV || NodeEnvEnum.DEV,
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
    POSTGRES_PORT: Number(process.env.POSTGRES_PORT) || 5433,
    POSTGRES_DB: process.env.POSTGRES_DB || 'MyDB',
    POSTGRES_USER: process.env.POSTGRES_USER || 'user',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'user',
};
