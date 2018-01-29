
/* this js file halps us in handling erros */
module.exports = {
    handleDevErrors: async (err, req, res, next) => {
        /* this is for handling dev errors, we will be throwing err stack here */
        // set locals, only providing error in development
        res.locals.message = process.env.NODE_ENV === 'development' ? err.message : 'something went wrong';
        res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    },
    /* this is for handling 404 error */
    handle404Error: async (req, res, next) => {
        res.status(404).json({status : false, code : 404, message: 'please check URL'})
    },
    /* centralizing all the errors */
    handleExceptions : asyncMiddleware = fn =>
    (req, res, next) => {
      Promise.resolve(fn(req, res))
        .catch((error)=>{next(error)}); 
    }
}