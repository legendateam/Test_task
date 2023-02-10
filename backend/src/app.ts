import express from 'express';

import { configs } from './configs';
import { AppDataSource } from './configs/data-source';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = configs;

app.listen(PORT, () => {
    console.log(`Server is Running on PORT:${PORT}!`);

    // connect to db
    AppDataSource.initialize()
        .then(() => console.log('Data Source has been initialized!'))
        .catch((e) => console.error('Error during Data Source initialization', e));
});
