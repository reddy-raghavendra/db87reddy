var Shoe = require('../models/shoe');
// List of all Costumes
exports.shoe_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoe list');
};
// for a specific Costume.
exports.shoe_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoe detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.shoe_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoe create POST');
};
// Handle Costume delete form on DELETE.
exports.shoe_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoe delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.shoe_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoe update PUT' + req.params.id);
};