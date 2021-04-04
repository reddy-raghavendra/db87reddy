const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
    shoeCategory: String,
    brand: String,
    size: Number
})
module.exports = mongoose.model("Shoe", shoeSchema)