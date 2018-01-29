/* this is middleware to connect mongodb */

const mongoose = require('mongoose');
const configs = require('../utils/config');
const url = `mongodb://${configs.mongoDB.host}/${configs.mongoDB.database}`;

exports.connectMongoDB = async (req, res, next) => {
    /* connecting to MongoDB */
    mongoose.connect(url, { useCl: true });
    /* Get Mongoose to use the global promise library */
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on('error',(error)=>next(error));
    db.on('open',()=>next());
}