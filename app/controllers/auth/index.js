
const router = require('express').Router();

/* login post routing example */
router.post('/login',require('./login').login)

/* signup routing example */
router.post('/signup',require('./signup').signUp)

module.exports = router;