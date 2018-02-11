

/* centalizing all the manual queries at one place */
module.exports = {
    runQuery : async (connection, query) =>{
        return new Promise((resolve, reject) =>{
            connection.query(query,(err,result)=>{
                (err ? reject(err) : resolve(result))
            })
        })
    }
}