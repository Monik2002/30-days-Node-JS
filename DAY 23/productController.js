const ProductWithCategory = require('./productModel');
const Category = require('./categoryModel');

async function createProduct(req, res) {
  try {
    const { name, price, quantity, category } = req.body;

    let existingCategory = await Category.findOne({ category });
    if (!existingCategory) {
      existingCategory = await Category.create({ category });
    }

    const newProduct = new ProductWithCategory({
      name,
      price,
      quantity,
      category: existingCategory._id
    });

    await newProduct.save();

    res.json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await ProductWithCategory.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching all products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { name, price, quantity, category } = req.body;

    let existingCategory = await Category.findOne({ category });
    if (!existingCategory) {
      existingCategory = await Category.create({ category });
    }

    const updatedProduct = await ProductWithCategory.findByIdAndUpdate(
      id,
      { name, price, quantity, category: existingCategory._id },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await ProductWithCategory.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(deletedProduct);
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getProductsByCategory(req, res) {
  try {
    const { category } = req.params;

    const products = await ProductWithCategory.find({}).populate({
      path: 'category',
      match: { category }
    });

    const filteredProducts = products.filter(product => product.category !== null);

    res.json(filteredProducts);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct, getProductsByCategory };
