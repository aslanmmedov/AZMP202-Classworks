const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
  }
  ,{ versionKey: false , timestamps: true });
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
