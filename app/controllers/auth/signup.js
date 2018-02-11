/* this is just sample to show how we can superate our modules to smallest possible */


const services = require('../../services/auth/auth');
const bcrypter = require('../../utils/bcrypter');

module.exports = {
  signUp: async (req, res) => {
    /* first check whether user exists with same username or not
            this is just example signup process, feel free to use any stratefy */
    const userData = await services.login(req.mysqlConn, req.body.username);
    if (userData.length !== 0) return res.json({ status: false, message: 'user already exists' });

    /* if the user doesn't exists then has his password to store in database */
    const hasPassword = await bcrypter.encryptPassword(req.body.password);

    /* prepare object to insert data into database
               make sure this object properties matches user table colomn names
            */
    const data = { username: req.body.username, password: hasPassword };

    /* inserting the data */
    const signUp = await services.signUp(req.mysqlConn, data);
    res.json({ status: true, data: signUp });
  },
};
