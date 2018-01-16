
/* centralizing all the responses */

/* for handling success or failed responses */
const resHandler = require('../../utils/responseHandler');
const tokenHelper = require('../../utils/tokenHelper');



/* we will be using awesome Async await JS feature for our code 
for more information please refer to https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
*/


/* ##################### */
/* there are many strategies to handle errors in async await functions but for now 
we will be sticking to  good old try catch */ 

module.exports = {
    login : async (req,res) =>{
        try{
            /* for reading body data use below code provided body data is urlencoded data
            const username = req.body.username */

            const data = { id: 1, username: 'Hey!' }
            /* after user being verified, we will be creating a token 
            and will be sharing with user */
            const token = await tokenHelper.createToken(data);
            /* here I'm using object spread to add token property to existed data object 
               if it's not working with your node version feel free to use other expression 
            */
            resHandler.yahResponse(res,{...data, token})
        }catch(error){

        }
    }
}