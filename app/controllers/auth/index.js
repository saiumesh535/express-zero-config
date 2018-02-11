
const router = require('express').Router();
const { handleExceptions } = require('../../middlewares/errorHandlers');

/* login post routing example */
router.post('/login', handleExceptions(require('./login').login));

/* signup routing example */
router.post('/signup', handleExceptions(require('./signup').signUp));

module.exports = router;
