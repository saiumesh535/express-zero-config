const { handleExceptions } = require('../../middlewares/errorHandlers');

const router = require('express').Router();

router.post('/login', handleExceptions(require('./login').login));
router.post('/signup', handleExceptions(require('./signup').signup));

module.exports = router;
