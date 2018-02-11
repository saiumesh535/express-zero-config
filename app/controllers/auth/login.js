
/* centralizing all the responses */

// @ts-check

/* for handling success or failed responses */
const tokenHelper = require('../../utils/tokenHelper');
const services = require('../../services/auth/auth');
const bcrypter = require('../../utils/bcrypter');


/* we will be using awesome Async await JS feature for our code
for more information please refer to
https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
*/


module.exports = {
  login: async (req, res) => {
    /* for reading body data use below code provided body data is urlencoded data
        const username = req.body.username */

    /* now you will have mysql database connection in req object, as we have added in
        from middleware */

    const userData = await services.login(req.mysqlConn, req.body.username);

    if (userData.length === 0) res.json({ status: false, message: 'user already exisits' });

    /* now check password */
    const isValidPassword = await bcrypter.checkPassword(req.body.password, userData[0].password);
    if (!isValidPassword) return res.json({ status: false, message: 'check creds' });

    /* after user being verified, we will be creating a token
        and will be sharing with user */
    /* never add password to token */
    const token = await tokenHelper.createToken({ ...userData[0], password: 'haha' });
    /* here I'm using object spread to add token property to existed data object
           if it's not working with your node version feel free to use other expression
        */
    res.json({ status: true, token });
  },
};
