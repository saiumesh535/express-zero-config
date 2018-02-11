const winston = require('winston');
const logger = new winston.Logger({
  level: 'error',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: __dirname+'/error-log.log' })
  ]
});

const errQueryOptions = {
  from: new Date - 24 * 60 * 60 * 1000,
  until: new Date,
  limit: 10,
  start: 0,
  level: 'error',
  order: 'desc',
};

module.exports = {
  /* logging the errors */
  logTheError: ( error ) =>{
    logger.log('error', error);
  },
  /* querying the errors */
  queryErrors: ( from = new Date, until = new Date) =>{
    return new Promise(( resolve, reject ) =>{
      logger.query({...errQueryOptions,  from, until }, function (err, results) {
        ( err ? reject(err) : resolve(results) );
      });
    })
  }
}