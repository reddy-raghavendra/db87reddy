var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var shoe_controller = require('../controllers/shoe');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Shoe.
router.post('/resource/shoes', shoe_controller.shoe_create_post);
// DELETE request to delete shoe.
router.delete('/resource/shoes/:id', shoe_controller.shoe_delete);
// PUT request to update Shoe.
router.put('/resource/shoes/:id', shoe_controller.shoe_update_put);
// GET request for one Shoe.
router.get('/resource/shoes/:id', shoe_controller.shoe_detail);
// GET request for list of all Shoe items.
router.get('/resource/shoes', shoe_controller.shoe_list);
module.exports = router;