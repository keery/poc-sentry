export const onError = (err, req, res, next) => {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    console.log('SENTRY ERROR : ', res.sentry);
    res.end(res.sentry + "\n");
};
