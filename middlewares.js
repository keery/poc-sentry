const Sentry = require('@sentry/node');

export const onError = (err, req, res, next) => {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    console.log(`SENTRY ERROR N°${res.sentry} : `, err);
    res.render('error', { err : err.message});
};
