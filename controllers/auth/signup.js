/* this is just sample to show how we can superate our modules to smallest possible */

const resHandler = require('../../utils/responseHandler');

module.exports = {
    signUp : async (req,res) =>{
        /* write code for signup */
        resHandler.yahResponse(res,{id : 1, username : 'Hey!'})
    }
}