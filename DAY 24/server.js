const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const { createProductRoute, getAllProductsRoute, updateProductRoute, deleteProductRoute } = require('./productRoutes');
const { connect } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

connect();

app.post('/products', createProductRoute);
app.get('/products', getAllProductsRoute);
app.put('/products/:id', updateProductRoute);
app.delete('/products/:id', deleteProductRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
