/* this middleware helps us in verifying the token */

const tokenHelper = require('../utils/tokenHelper');
const resHandler = require('../utils/responseHandler');

exports.verifyToken = async (req,res,next) =>{
    try{
        if(req.get('token') == undefined || null){
            return resHandler.errorMessage(res,'no token provided',req);
        }
        const tokenData = await tokenHelper.verifyToken(req.get('token'));
        next();
    }catch(error){
        /* when token expires 
           either you can end session or refresh the token and 
           send 
        */
        if(error.name === 'TokenExpiredError'){
            return resHandler.errorMessage(res,'token expired',req);
        }
        resHandler.errorMessage(res,'not a valid token',req);
    }
}