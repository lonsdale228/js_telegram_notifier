import {
    PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions';

import User from './models/User';
import UserNote from './models/UserNote';
import Note from './models/Note';

import dotenv from 'dotenv'; 
dotenv.config();

const typeOrmConfig: PostgresConnectionOptions = {
    type: "postgres",
    host: process.env.HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/../app/models/*.{j,t}s`]
};

export { typeOrmConfig };