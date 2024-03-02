const Product = require('./productModel');

/**
 * Express route to create a new product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function createProductRoute(req, res) {
  try {
    const { name, description, price } = req.body;
    const newProduct = new Product({ name, description, price });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

/**
 * Express route to retrieve all products
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function getAllProductsRoute(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

/**
 * Express route to update a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function updateProductRoute(req, res) {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

/**
 * Express route to delete a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function deleteProductRoute(req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(deletedProduct);
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { createProductRoute, getAllProductsRoute, updateProductRoute, deleteProductRoute };
