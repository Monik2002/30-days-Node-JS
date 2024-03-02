const mongoose = require('mongoose');
const Category = require('./categoryModel');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

const ProductWithCategory = mongoose.model('ProductWithCategory', productSchema);

module.exports = ProductWithCategory;
