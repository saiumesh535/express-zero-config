const errorHandler = require('../../middlewares/errorHandlers');

const router = require('express').Router();
// console.log(errorHandler.handleExceptions(require('./login').login))
router.get('/login', errorHandler.handleExceptions(require('./login').login));
//router.get('/login',require('./login').login);
module.exports = router;