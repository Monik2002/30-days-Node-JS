const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const { createProductRoute, getAllProductsRoute, updateProductRoute, deleteProductRoute } = require('./productRoutes');
const { connect } = require('./database');
const { createProductNameIndex } = require('./indexing'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

connect()
  .then(() => {
    createProductNameIndex();
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

app.post('/products', createProductRoute);
app.get('/products', getAllProductsRoute);
app.put('/products/:id', updateProductRoute);
app.delete('/products/:id', deleteProductRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
