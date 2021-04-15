var express = require('express');
const shoe_controlers = require('../controllers/shoe');
var router = express.Router();

/* GET home page. */
router.get('/', shoe_controlers.shoe_view_all_Page);
/* GET detail costume page */
router.get('/detail', shoe_controlers.shoe_view_one_Page);
router.get('/create', shoe_controlers.shoe_create_Page);
/* GET create update page */
router.get('/update', shoe_controlers.shoe_update_Page);
/* GET create costume page */
router.get('/delete', shoe_controlers.shoe_delete_Page);
module.exports = router;