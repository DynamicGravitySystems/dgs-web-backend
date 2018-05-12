const express = require('express');
const router = express.Router({});

router.use('/sendmail', require('./sendmail'));

module.exports = router;
