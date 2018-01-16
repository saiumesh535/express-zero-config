/* we will be centralizing all the responses at one place */


module.exports = {
    yahResponse : async (res, data) =>{
        res.json({status : true , data: data})
    }
}