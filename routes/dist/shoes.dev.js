"use strict";

var express = require('express');

var shoe_controlers = require('../controllers/shoe');

var router = express.Router();

var secured = function secured(req, res, next) {
  if (req.user) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
};
/* GET home page. */


router.get('/', shoe_controlers.shoe_view_all_Page);
/* GET detail costume page */

router.get('/detail', shoe_controlers.shoe_view_one_Page);
router.get('/create', secured, shoe_controlers.shoe_create_Page);
/* GET create update page */

router.get('/update', secured, shoe_controlers.shoe_update_Page);
/* GET create costume page */

router.get('/delete', secured, shoe_controlers.shoe_delete_Page);
module.exports = router;