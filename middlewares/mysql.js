/* this file helps to connect mysql database */

const mysql = require('mysql');
const responseHandler = require('../utils/responseHandler');
const config = require('../utils/config');
let pool = undefined;


module.exports = {
    getConnection: async (req, res, next) => {
        /* if pool already been set then re-use it */
        if (pool) {
            getConnection(req, res, next);
        } else {
            /* create pool 
            here, we are getting mysql config from config.js,
            but you can also opt for process evn's 
            */
            pool = mysql.createPool(config.mysql)
            getConnection(req, res, next);
        }

    }
}

const getConnection = (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) {
            responseHandler.nahResoonse(res, err, 101, req)
        } else {
            /* adding connection to req object, so it can be used in router */
            req.mysqlConn = connection;
            next()
        }
    })
}