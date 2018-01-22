
const mysql = require('mysql');
const appService = require('../appService');

module.exports = {
    login : async (connection, username ) =>{
        const query = mysql.format("select * from users where username = ?",[username]);
        return await appService.runQuery(connection,query);
    },
    signUp : async (connection, data) =>{
        const query = mysql.format("insert into users set ? ",[data]);
        return await appService.runQuery(connection,query);
    }
}