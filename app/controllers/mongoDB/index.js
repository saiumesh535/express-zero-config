const errorHandler = require('../../middlewares/errorHandlers');

const router = require('express').Router();

router.post('/login', errorHandler.handleExceptions(require('./login').login));
router.post('/signup',errorHandler.handleExceptions(require('./signup').signup));

module.exports = router;