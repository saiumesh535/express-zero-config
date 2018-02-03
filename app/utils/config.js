/* this is config file for our application */

module.exports = {
    jsonWebTokenKey : 'jsonWebTokenSecreyKey1212##',
    /* this mysql database config 
       you can also opt for env variables  
    */
    mysql : {
        host: 'localhost',
        user : 'root',
        password: '',
        database : 'mysql_database'

    },
    mongoDB : {
        host : 'localhost',
        database : 'express-zero-config'
    },
    /* do not change this salrounds value */
    bycryptSalt : 13
}