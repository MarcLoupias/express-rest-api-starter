var express = require('express');
var router = express.Router();

/* GET ping listing. */
/* eslint-disable no-unused-vars */
router.get('/', function (req, res, next) {
    res.json({value: 'pong'});
});

module.exports = router;
