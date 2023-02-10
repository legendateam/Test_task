import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';

import { configs } from './configs';
import { NodeEnvironmentVariableEnum } from '../enums';

let src = 'src';

if (configs.NODE_ENVIRONMENT_VARIABLE === NodeEnvironmentVariableEnum.PROD) src = '';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: configs.POSTGRES_HOST,
    port: configs.POSTGRES_PORT,
    username: configs.POSTGRES_USER,
    password: configs.POSTGRES_PASSWORD,
    database: configs.POSTGRES_DB,
    synchronize: false,
    logging: true,
    migrations: [path.join(process.cwd(), src, 'dataBase', 'migrations', '**', '*.ts')],
    subscribers: [],
    entities: [path.join(process.cwd(), src, 'dataBase', 'entities', '**', '*.entity.ts')],
});
