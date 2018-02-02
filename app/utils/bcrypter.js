/* this is where we will encrypt the paswrod and will store that in DB,
you know saving plain passwords is bas :-( */

/* we are using bcryptjs for encrypting the password, feel free to use other strategies */
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {
    /* we are encrypting the password as hash to  save in database */
    encryptPassword: async (plainPassword) => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
                (err ? reject(err) : (resolve(hash)));
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