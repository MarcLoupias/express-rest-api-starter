var express = require('express');
var router = express.Router();

/* GET ping listing. */
router.get('/', function (req, res, next) {
    res.json({value: 'pong'});
});

module.exports = router;
