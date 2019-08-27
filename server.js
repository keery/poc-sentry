import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { onError } from './middlewares';

const Sentry = require('@sentry/node');

dotenv.config();

const app = express();

Sentry.init({ dsn: process.env.SENTRY_DSN });

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// Apply routes
app.use('/', routes);

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Error handler
app.use(onError);
  
app.listen(3000);
