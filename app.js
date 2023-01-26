import express from 'express';
import { join, dirname } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';
import throwRouter from './routes/throw.js';
import currentRouter from './routes/current.js';
import logsRouter from './routes/logs.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/throw', throwRouter);
app.use('/current', currentRouter);
app.use('/logs', logsRouter);

export default app;
