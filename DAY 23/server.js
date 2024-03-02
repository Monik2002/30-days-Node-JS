const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./database');
const { createProduct, getAllProducts, updateProduct, deleteProduct, getProductsByCategory } = require('./productController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connect();

app.post('/products', createProduct);

app.get('/products', getAllProducts);

app.get('/products/category/:category', getProductsByCategory);

app.put('/products/:id', updateProduct);

app.delete('/products/:id', deleteProduct);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
