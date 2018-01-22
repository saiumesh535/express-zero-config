/* file helps us in creating and verifying the tokens  
 for more information checkout https://www.npmjs.com/package/jsonwebtoken */

 const jwt = require('jsonwebtoken');
 const config = require('./config');

 module.exports = {
    
    /* there are many strategies to create token, check above mentioned URL for 
        more information. by default jsonwebtoken uses (HMAC SHA256) algorithm to create but you can chosoe 
       anyone of the mentioned algorithms on above URL
    */
    createToken :  async (data) => {
        /* token will be expired in 1 hour
        you can also use this expression expiresIn: 60 * 60 */
        return await jwt.sign(data, config.jsonWebTokenKey, { expiresIn: '1h' });
     },
     verifyToken : async (token) =>{
         return new Promise((resolve,reject)=>{
            jwt.verify(token, config.jsonWebTokenKey,(err,decoded)=>{
                (err ? reject(err) : resolve(decoded));
            })
         })
     }
 }