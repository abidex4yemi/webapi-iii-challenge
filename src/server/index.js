/**
 * Application entry point
 */
'use strict';

/**
 * Module dependencies
 */
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { customErrorHandler } from './middleware';

/**
 * Module constants
 */
// Get port number if set or default to 2019
const PORT = process.env.PORT || 2019;

// Initialize express app
const app = express();

/**
 * Set up middleware
 */

// Parse application/json
app.use(express.json());

// allow any request from a different domain
// cross origin resource sharing (cors)
app.use(cors());

// Log all http request
app.use(logger());

// Set http headers for security reasons
app.use(helmet());

// handle all application error
app.use(customErrorHandler());

// app.get('/', (req, res) => {
//   return res.status().json
// });

// Start application on port 2019
app.listen(PORT, console.log(`Server running on port: ${PORT}`));
