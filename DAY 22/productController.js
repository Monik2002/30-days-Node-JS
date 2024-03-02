const Product = require('./productModel');

// Create a product
async function createProduct(product) {
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    console.log('Product created successfully:', newProduct);
    return newProduct;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

// Retrieve all products
async function getAllProducts() {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Update a product
async function updateProduct(productId, updatedProduct) {
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
    if (!product) {
      console.error('Product not found');
      return null;
    }
    console.log('Product updated successfully:', product);
    return product;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

// Delete a product
async function deleteProduct(productId) {
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      console.error('Product not found');
      return null;
    }
    console.log('Product deleted successfully:', product);
    return product;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct };
