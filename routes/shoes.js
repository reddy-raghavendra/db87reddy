var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shoes', { title: 'Search Results by shoes' });
});

module.exports = router;