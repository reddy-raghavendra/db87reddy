"use strict";

var mongoose = require("mongoose");

var shoeSchema = mongoose.Schema({
  shoeCategory: {
    type: String,
    required: [true, "Shoe category should be mandatory"]
  },
  brand: String,
  size: {
    type: Number,
    min: [1, "Shoe size should be minimum of 1"],
    max: [14, "Shoe size cannot be greater than 14"]
  }
});
module.exports = mongoose.model("Shoe", shoeSchema);