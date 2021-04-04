var Shoe = require('../models/shoe');
// List of all Costumes

exports.shoe_list = async function(req, res) {
    try {
        theShoes = await Shoe.find();
        res.send(theShoes);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }

};
// for a specific Costume.
exports.shoe_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoe detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.shoe_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Shoe();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.shoeCategory = req.body.shoeCategory;
    document.brand = req.body.brand;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.shoe_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoe delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.shoe_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoe update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.shoe_view_all_Page = async function(req, res) {
    try {
        theShoes = await Shoe.find();
        res.render('shoes', { title: 'Shoes Search Results', results: theShoes });
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};