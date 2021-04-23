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
exports.shoe_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Shoe.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
        console.log(err)
        res.send(err);
        res.status(500)
    }
};
// Handle Costume delete form on DELETE.
exports.shoe_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Shoe.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }

};
// Handle Costume update form on PUT.
exports.shoe_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Shoe.findById(req.params.id)
            // Do updates of properties
        if (req.body.shoeCategory) toUpdate.shoeCategory = req.body.shoeCategory;
        if (req.body.brand) toUpdate.brand = req.body.brand;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(err);
    }

};

// Handle a delete one view with id from query
exports.shoe_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Shoe.findById(req.query.id)
        res.render('shoedelete', { title: 'Shoe Delete', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
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

// Handle a show one view with id specified by query
exports.shoe_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Shoe.findById(req.query.id)
        console.log(result)
        res.render('shoedetail', { title: 'Shoe Detail', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.shoe_create_Page = function(req, res) {
    console.log("create view")
    try {
        res.render('shoecreate', { title: 'Shoe Create' });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.shoe_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Shoe.findById(req.query.id)
        console.log(result)
        res.render('shoeupdate', { title: 'Shoe Update', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};