const router = require('express').Router();

router.use('/admin', require('./users'));


module.exports = router;