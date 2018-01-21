/* this just example route to explain how'd we verify token and proceeds for further actions */

const resHandler = require('../../utils/responseHandler');

exports.getPosts = (req,res)=>{
    const postsData = { id : 1, posts : 'check expres-zero-config at github by saiumesh535'};
    resHandler.yahResponse(res,postsData,req);
}