import { NodeEnvEnum } from '../enums';

export const configs = {
    PORT: process.env.PORT || 2000,
    NODE_ENV: process.env.NODE_ENV || NodeEnvEnum.DEV,
    SECRET_KEY: process.env.SECRET_KEY || '12345678123456781234567812345678',
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
    POSTGRES_PORT: Number(process.env.POSTGRES_PORT) || 5432,
    POSTGRES_DB: process.env.POSTGRES_DB || 'db_name',
    POSTGRES_USER: process.env.POSTGRES_USER || 'user_name',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'secret_password',
};
