'use strict';
/**
 * Application Main files
 */
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { postRouter } from './routes/postRouter';
import { userRouter } from './routes/userRouter';
import { customErrorHandler } from './middleware';
import { successStatusTypes, createSuccessData } from './helpers';

// Success status code 200
const { OK } = successStatusTypes;

const app = express();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

// handle all application error
app.use(customErrorHandler());

// [GET] Handle home route
app.get('/', (req, res) => {
	return res.status(OK).json(createSuccessData({ message: 'Welcome to home route...', data: [] }));
});

app.use('/api/v1', [postRouter, userRouter]);

// [all] Handle invalid request
app.all('*', (req, res) => {
	return res.status(404).json({
		success: false,
		message: 'Route does not exist...',
		body: []
	});
});

export default app;
