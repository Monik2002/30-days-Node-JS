const Product = require('./productModel');

function createProductNameIndex() {
  Product.createIndex({ name: 1 }, (err, result) => {
    if (err) {
      console.error('Error creating index:', err);
    } else {
      console.log('Index created successfully:', result);
    }
  });
}

module.exports = { createProductNameIndex };
