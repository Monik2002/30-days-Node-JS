const Product = require('./productModel');

async function getProductStatistics() {
  try {
    const stats = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 },
          averagePrice: { $avg: '$price' },
          highestQuantity: { $max: '$quantity' }
        }
      }
    ]);

    if (stats.length === 0) {
      return {
        totalProducts: 0,
        averagePrice: 0,
        highestQuantity: 0
      };
    }

    return stats[0];
  } catch (error) {
    console.error('Error calculating product statistics:', error);
    throw error;
  }
}

module.exports = getProductStatistics;
