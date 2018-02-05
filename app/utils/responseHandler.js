/* we will be centralizing all the responses at one place */


module.exports = {
    /* for all the positive response */
    yahResponse : async (res, data, req) =>{
        res.status(200).json({status : true , data: data});
        releaseMysqlConnection(req)
    },
    /* when something goes wrong */
    nahResoonse : async (res,error,code,req) =>{
        res.status(500).json({status : false , code : code})
        /* log the error */
        logError(error);
        releaseMysqlConnection(req);
    },
    /* when we want send manual error messages */
    errorMessage : async (res,message,req) =>{
        res.status(200).json({status : false , message : message});
        releaseMysqlConnection(req);
    }
}

/* release mysql connection if it's available */
const releaseMysqlConnection = (req) =>{
    if(req && (req.mysqlConn != undefined)){
        req.mysqlConn.release();
    }
}

/* logging the error */
const logError  = (error) =>{
    console.log(error.stack);
}