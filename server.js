import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { onError } from './middlewares';

const Sentry = require('@sentry/node');

dotenv.config();

const app = express();

Sentry.init({
    release     : `${process.env.PROJECT_NAME}@${process.env.PROJECT_VERSION}`,
    environment : process.env.NODE_ENV,
    dsn         : process.env.SENTRY_DSN,
});

// Documentation about scope : https://docs.sentry.io/enriching-error-data/context/?platform=node
Sentry.configureScope((scope) => {
    scope.setUser({ email : 'guillaume@example.com' });
});

app.set('views', './views')
app.set('view engine', 'pug');

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// Apply routes
app.use('/', routes);

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Error handler
app.use(onError);
  
app.listen(3000);
