var express = require('express');
const shoe_controlers = require('../controllers/shoe');
var router = express.Router();

/* GET home page. */
router.get('/', shoe_controlers.shoe_view_all_Page);

module.exports = router;