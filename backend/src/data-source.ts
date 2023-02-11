import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { configs } from './configs';
import { CommonFields, User } from './dataBase/entities';
import { createTableCommonFields1676129373728, createTableUser1676129794335 } from './dataBase/migrations';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: configs.POSTGRES_HOST,
    port: configs.POSTGRES_PORT,
    username: configs.POSTGRES_USER,
    password: configs.POSTGRES_PASSWORD,
    database: configs.POSTGRES_DB,
    synchronize: false,
    logging: false,
    migrations: [createTableCommonFields1676129373728, createTableUser1676129794335],
    subscribers: [],
    entities: [CommonFields, User],
});
