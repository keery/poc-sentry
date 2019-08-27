const Sentry = require('@sentry/node');

export const onError = (err, req, res, next) => {
    // Documentation about scope : https://docs.sentry.io/enriching-error-data/context/?platform=node
    Sentry.configureScope((scope) => {
        scope.setUser({ email : 'guillaume@example.com' });
    });
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    console.log('SENTRY ERROR : ', res.sentry);
    res.end(res.sentry + "\n");
};
