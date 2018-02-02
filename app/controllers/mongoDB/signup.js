const userModel = require('../../schema/auth/users');

exports.signup = async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    userModel.usersModel.insertMany([{username,password}]).catch((error)=>{
        res.json(error);
    })
    
}