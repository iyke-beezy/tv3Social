import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import homeRouter from './routes/home.route'
import authRouter from './routes/auth.route'
import { config } from 'dotenv';

config ();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRouter);
app.use('/auth', authRouter)

export default app
