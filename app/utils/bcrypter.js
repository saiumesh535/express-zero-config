/* this is where we will encrypt the paswrod and will store that in DB,
you know saving plain passwords is bas :-( */

/* we are using bcryptjs for encrypting the password, feel free to use other strategies */
const bcrypt = require('bcryptjs');
const config = require('./config');

module.exports = {
    /* we are encrypting the password as hash to  save in database */
    /* bcrypt is that the output of the genSalt function contains both 
        the hash and the salt in one string. This means that you can store just the single item in your database, 
        instead of two */
    encryptPassword: async (plainPassword) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(config.bycryptSalt,(err,salt)=>{
                if(err) return reject(err);
                bcrypt.hash(plainPassword, salt, (err, hash) => {
                    (err ? reject(err) : (resolve(hash)));
                })
            })
        })
    },
    /* now check plain password and hashed password */
    checkPassword: async (plainPassword, hash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plainPassword, hash, (err, res) => {
                (err ? reject(err) : resolve(res));
            })
        })
    }
}    
