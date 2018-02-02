const userSchema = require('../../schema/auth/users');
exports.login = async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
}