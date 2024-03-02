const mongoose = require('mongoose');

// Defining the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

// Creating the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
